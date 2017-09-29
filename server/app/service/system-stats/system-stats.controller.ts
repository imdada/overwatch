import { injectable, inject } from "inversify";
import TYPES from "../../common/types";
import * as express from "express";
import { Log } from "../../common/log";
import { Socket } from "../../common/socket-util";
import { EventSource } from "../../common/event-source";

import { SystemStatsService } from "./system-stats.service";
import { SystemStatsDto, SystemStatsInput, SingleServerStatsInput } from "./system-stats.dto";
import { ResponseWriter } from "../../common/response-writer";

interface SystemStatsController {
    getRouter(): express.Router;
}

@injectable()
class SystemStatsControllerImpl implements SystemStatsController {

    private static readonly LOGGER = Log.getLogger("SystemFailureController");
    private serverStats: Array<SingleServerStatsInput> = new Array<SingleServerStatsInput>();

    private errorHandler = (res: express.Response, next: Function) => {
        return (err: Error) => {
            next(err);
        };
    }

    constructor(
        @inject(TYPES.Socket) private socket: Socket,
        @inject(TYPES.EventSource) private eventSource: EventSource,
        @inject(TYPES.SystemStatsService) private systemStatsService: SystemStatsService
    ) {
        eventSource.listen<SingleServerStatsInput>("submit_stats", this.saveServerStats);
        const now: Date = new Date();
        const wait = (80 - now.getSeconds()) * 1000;
        setTimeout(this.startAggregation, wait);
    }

    private saveServerStats = (stats: SingleServerStatsInput): void => {
        this.serverStats.push(stats);
    }

    private startAggregation = () => {
        if (this.serverStats.length > 0) {
            const now: Date = new Date();
            now.setSeconds(0);
            const begin = Math.floor((new Date(now.getTime() - 60000).getTime()) / 1000);
            const end = begin + 60;

            let minuteStats: Array<SingleServerStatsInput> = new Array<SingleServerStatsInput>();
            this.serverStats = this.serverStats.filter((stats: SingleServerStatsInput) => {
                if (stats.time >= begin && stats.time < end) {
                    minuteStats.push(stats);
                    return false;
                } else {
                    return true;
                }
            });

            if (minuteStats.length > 0) {
                SystemStatsControllerImpl.LOGGER.info(`aggregating <${ minuteStats.length }> stats...`);

                let systemStats: SystemStatsInput = {};
                minuteStats.forEach((stats: SingleServerStatsInput) => {
                    const system: string = stats.system;
                    if (systemStats[system] === undefined) systemStats[system] = {};
                    for (let target in stats.stats) {
                        if (target === undefined) continue;
                        if (systemStats[system][target] === undefined) systemStats[system][target] = {};
                        for (let host in stats.stats[target]) {
                            if (host === undefined) continue;
                            if (systemStats[system][target][host] === undefined)
                                systemStats[system][target][host] = {
                                    rpm: 0,
                                    fpm: 0
                                };
                            systemStats[system][target][host].rpm += stats.stats[target][host].rpm;
                            systemStats[system][target][host].fpm += stats.stats[target][host].fpm;
                        }
                    }
                });
                this.systemStatsService.saveSystemStats(begin, systemStats)
                .then(() => {
                    return this.systemStatsService.getSystemStats();
                })
                .then((systemStatsDto: SystemStatsDto) => {
                    this.socket.broadcast(Socket.topics.systemStats, systemStatsDto);
                });
            }
        }
        setTimeout(this.startAggregation, 60000);
    }

    public getRouter(): express.Router {
        let router = express.Router();
        router.get("", this.getSystemStats);
        router.post("/", this.saveSystemStats);
        return router;
    }

    private getSystemStats = (req: express.Request, res: express.Response, next: Function): void => {
        this.systemStatsService.getSystemStats()
        .then((systemStatsDto: SystemStatsDto) => {
            ResponseWriter.success(res, systemStatsDto);
        })
        .then(null, this.errorHandler(res, next));
    }

    private saveSystemStats = (req: express.Request, res: express.Response, next: Function): void => {
        let time: number = req.body.time;
        let stats: SystemStatsInput = req.body.stats;
        if (stats === undefined) {
            ResponseWriter.error(res, 400, "stats is required");
            return;
        }
        this.systemStatsService.saveSystemStats(time, stats)
        .then(() => {
            ResponseWriter.success(res);
        })
        .then(() => {
            return this.systemStatsService.getSystemStats();
        })
        .then((systemStatsDto: SystemStatsDto) => {
            this.socket.broadcast(Socket.topics.systemStats, systemStatsDto);
        })
        .then(null, this.errorHandler(res, next));
    }

}

export { SystemStatsController, SystemStatsControllerImpl };
