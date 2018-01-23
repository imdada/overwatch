import { inject, injectable } from "inversify";
import TYPES from "../../common/types";
import { Log } from "../../common/log";
import { SystemInfoAttribute } from "../system-info/system-info.model";
import { SystemInfoService } from "../system-info/system-info.service";
import { SystemStats } from "./system-stats.model";
import { SystemStatsRepository } from "./system-stats.repo";
import { SystemStatsDto, SystemStatsInput, RpcStatsInput, ServerStatsInput, SingleServerStatsInput } from "./system-stats.dto";

interface PropertyLookupMap {
    [property: string]: Map<number, number>;
}

interface SystemInfo {
    rpm: number;
    fpm: number;
    hosts: Map<string, ServerInfo>;
}

interface ServerInfo {
    rpm: number;
    fpm: number;
}

interface SystemStatsService {
    getSystemStats(): Promise<SystemStatsDto>;
    saveSystemStats(time: number, stats: SystemStatsInput): Promise<void>;
}

@injectable()
class SystemStatsServiceImpl implements SystemStatsService {

    private static readonly LOGGER = Log.getLogger("SystemStatsService");
    private static readonly MAX_STATS: number = 20;

    public constructor(
        @inject(TYPES.SystemStatsRepository) private systemStatsRepository: SystemStatsRepository,
        @inject(TYPES.SystemInfoService) private systemInfoService: SystemInfoService
    ) { }

    private getLinkKey(source: string, target: string): string {
        return `${ source }-${ target }`;
    }

    private calcDataSum(data: Map<number, number>, begin: number, end: number): number {
        let sum = 0;
        for (let time = begin; time <= end; time ++) {
            if (data.has(time)) {
                sum += data.get(time);
            }
        }
        return sum;
    }

    public getSystemStats(): Promise<SystemStatsDto> {
        let holder: Map<string, any> = new Map<string, any>();
        let result: SystemStatsDto = {
            time: 0,
            nodes: [ ],
            links: [ ]
        };
        return this.systemStatsRepository.getLatestStatsTime()
        .then((time: number) => {
            if (time === null) return [ ];
            holder.set("time", time);
            return this.systemStatsRepository.getSystemStats(time - 14 * 60, time);
        })
        .then((stats: Array<SystemStats>) => {
            if (stats.length < 1) return result;
            result.time = holder.get("time");
            let nodeMap: Map<string, PropertyLookupMap> = new Map<string, PropertyLookupMap>();
            let linkMap: Map<string, PropertyLookupMap> = new Map<string, PropertyLookupMap>();
            stats.forEach((stat: SystemStats) => {
                let time = stat.time;
                for (let node of stat.nodes) {
                    let key = node.name;
                    if (!nodeMap.has(key)) {
                        nodeMap.set(key, {
                            "rpm": new Map<number, number>(),
                            "fpm": new Map<number, number>()
                        });
                    }
                    nodeMap.get(key)["rpm"].set(time, node.rpm);
                    nodeMap.get(key)["fpm"].set(time, node.fpm);
                }
                for (let link of stat.links) {
                    let key = this.getLinkKey(link.source, link.target);
                    if (!linkMap.has(key)) {
                        linkMap.set(key, {
                            "rpm": new Map<number, number>(),
                            "fpm": new Map<number, number>()
                        });
                    }
                    linkMap.get(key)["rpm"].set(time, link.rpm);
                    linkMap.get(key)["fpm"].set(time, link.fpm);
                }
            });

            let calcNodeAvg = (node: string, property: string, minutes: number): number => {
                let end: number = holder.get("time");
                let begin: number = end - minutes * 60;
                let data: Map<number, number> = nodeMap.get(node)[property];
                let sum = this.calcDataSum(data, begin, end);
                return parseFloat((sum / minutes).toFixed(3));
            };

            let calcLinkAvg = (source: string, target: string, property: string, minutes: number): number => {
                let end: number = holder.get("time");
                let begin: number = end - minutes * 60;
                let key: string = this.getLinkKey(source, target);
                let data: Map<number, number> = linkMap.get(key)[property];
                let sum = this.calcDataSum(data, begin, end);
                return parseFloat((sum / minutes).toFixed(3));
            };

            for (let node of nodeMap.keys()) {
                let rpm: Array<number> = [
                    calcNodeAvg(node, "rpm", 1),
                    calcNodeAvg(node, "rpm", 5),
                    calcNodeAvg(node, "rpm", 15)
                ];
                let fpm: Array<number> = [
                    calcNodeAvg(node, "fpm", 1),
                    calcNodeAvg(node, "fpm", 5),
                    calcNodeAvg(node, "fpm", 15)
                ];
                result.nodes.push([ node, rpm, fpm ]);
            }

            for (let link of linkMap.keys()) {
                const parts = link.split("-");
                let source: string = parts[0];
                let target: string = parts[1];
                let rpm: Array<number> = [
                    calcLinkAvg(source, target, "rpm", 60),
                    calcLinkAvg(source, target, "rpm", 5 * 60),
                    calcLinkAvg(source, target, "rpm", 15 * 60)
                ];
                let fpm: Array<number> = [
                    calcLinkAvg(source, target, "fpm", 60),
                    calcLinkAvg(source, target, "fpm", 5 * 60),
                    calcLinkAvg(source, target, "fpm", 15 * 60)
                ];
                result.links.push([ source, target, rpm, fpm ]);
            }

            return result;
        });
    }

    public saveSystemStats(time: number, stats: SystemStatsInput): Promise<void> {
        let systemStats: SystemStats = {
            time: time,
            nodes: [ ],
            links: [ ]
        };
        let systems: Map<string, SystemInfo> = new Map<string, SystemInfo>();
        let systemInfos: Array<SystemInfoAttribute> = new Array<SystemInfoAttribute>();
        for (let system in stats) {
            if (system === undefined) continue;
            if (!systems.has(system)) {
                systems.set(system, {
                    rpm: 0,
                    fpm: 0,
                    hosts: new Map<string, ServerInfo>()
                });
            }
            for (let target in stats[system]) {
                if (target === undefined) continue;
                if (!systems.has(target)) {
                    systems.set(target, {
                        rpm: 0,
                        fpm: 0,
                        hosts: new Map<string, ServerInfo>()
                    });
                }
                let targetSystem: SystemInfo = systems.get(target);

                let rpm = 0;
                let fpm = 0;
                for (let host in stats[system][target]) {
                    if (host === undefined) continue;
                    if (!targetSystem.hosts.has(host)) {
                        targetSystem.hosts.set(host, {
                            rpm: 0,
                            fpm: 0
                        });
                    }
                    let info: any = stats[system][target][host];
                    let targetServer: ServerInfo = targetSystem.hosts.get(host);
                    targetServer.rpm += info.rpm || 0;
                    targetServer.fpm += info.fpm || 0;
                    rpm += info.rpm || 0;
                    fpm += info.fpm || 0;
                    systemInfos.push({
                        time: time,
                        name: target,
                        node: host,
                        source: system,
                        rpm: info.rpm,
                        fpm: info.fpm
                    });
                }

                targetSystem.rpm += rpm;
                targetSystem.fpm += fpm;
                systemStats.links.push({
                    source: system,
                    target: target,
                    fpm: fpm,
                    rpm: rpm
                });
            }
        }

        systems.forEach((info, system) => {
            let fpm = info.fpm;
            let rpm = info.rpm;
            systemStats.nodes.push({
                name: system,
                fpm: fpm,
                rpm: rpm
            });
        });

        return this.systemStatsRepository.saveSystemStats(systemStats)
        .then(() => {
            return this.systemInfoService.saveSystemInfo(systemInfos);
        });

    }

}

export { SystemStats, SystemStatsService, SystemStatsServiceImpl };
