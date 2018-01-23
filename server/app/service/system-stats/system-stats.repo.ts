import { inject, injectable } from "inversify";
import TYPES from "../../common/types";
import { Log } from "../../common/log";
import { SystemInfoService } from "../system-info/system-info.service";
import { SystemInfoDto } from "../system-info/system-info.dto";
import { SystemStatsNode, SystemStatsLink, SystemStats } from "./system-stats.model";

interface SystemStatsLookupMap {
    nodes: Map<string, SystemStatsNode>;
    links: Map<string, SystemStatsLink>;
}

interface PropertyLookupMap {
    [property: string]: Map<number, number>;
}

interface InitListener {
    resolve: Function;
    reject: Function;
}

interface SystemStatsRepository {
    getSystemStats(begin: number, end: number): Promise<Array<SystemStats>>;
    getLatestStatsTime(): Promise<number>;
    saveSystemStats(systemStats: SystemStats): Promise<void>;
}

@injectable()
class SystemStatsRepositoryImpl implements SystemStatsRepository {

    private static readonly LOGGER = Log.getLogger("SystemStatsDao");
    private static readonly MAX_STATS: number = 15 * 60; // default 15 minutes max

    private statsTime: Array<number> = new Array<number>();
    private systemStatsMap: Map<number, SystemStats> = new Map<number, SystemStats>();
    private initialized: number = -1;
    private listeners: Array<InitListener> = new Array<InitListener>();

    public constructor(@inject(TYPES.SystemInfoService) private systemInfoService: SystemInfoService) { }

    private getLinkKey(source: string, target: string): string {
        return `${ source }-${ target }`;
    }

    private calcStats(systemInfos: Array<SystemInfoDto>): void {
        let timeMap: Map<number, SystemStatsLookupMap> = new Map<number, SystemStatsLookupMap>();
        systemInfos.forEach((systemInfo: SystemInfoDto) => {
            let time = systemInfo.time;
            if (!timeMap.has(time)) {
                timeMap.set(time, {
                    nodes: new Map<string, SystemStatsNode>(),
                    links: new Map<string, SystemStatsLink>()
                });
            }
            let system = systemInfo.name;
            let source = systemInfo.source;

            let lookupMap = timeMap.get(time);
            if (!lookupMap.nodes.has(system)) {
                lookupMap.nodes.set(system, {
                    name: system,
                    rpm: 0,
                    fpm: 0
                });
            }
            if (!lookupMap.nodes.has(source)) {
                lookupMap.nodes.set(source, {
                    name: source,
                    rpm: 0,
                    fpm: 0
                });
            }
            lookupMap.nodes.get(system).rpm += systemInfo.rpm;
            lookupMap.nodes.get(system).fpm += systemInfo.fpm;

            let linkKey: string = this.getLinkKey(systemInfo.source, systemInfo.name);
            if (!lookupMap.links.has(linkKey)) {
                lookupMap.links.set(linkKey, {
                    source: source,
                    target: system,
                    rpm: 0,
                    fpm: 0
                });
            }
            lookupMap.links.get(linkKey).rpm += systemInfo.rpm;
            lookupMap.links.get(linkKey).fpm += systemInfo.fpm;
        });

        timeMap.forEach((lookupMap: SystemStatsLookupMap, time: number) => {
            let systemStats: SystemStats = {
                time: time,
                nodes: [ ],
                links: [ ]
            };
            lookupMap.nodes.forEach((node: SystemStatsNode, key: string) => {
                systemStats.nodes.push(node);
            });
            lookupMap.links.forEach((link: SystemStatsLink, key: string) => {
                systemStats.links.push(link);
            });
            this.statsTime.push(time);
            this.systemStatsMap.set(time, systemStats);
        });
        this.statsTime.sort().reverse();
    }

    private init(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (this.initialized === 1) return resolve();
            else {
                this.listeners.push({
                    resolve: resolve,
                    reject: reject
                });
                if (this.initialized === 0) return;
                this.initialized = 0;
                let now: number = Math.floor(new Date().getTime() / 1000);
                let begin: number = now - SystemStatsRepositoryImpl.MAX_STATS;
                this.systemInfoService.getAllSystemInfo(begin)
                .then((systemInfos: Array<SystemInfoDto>) => {
                    SystemStatsRepositoryImpl.LOGGER.info("calculating system stats...");
                    this.calcStats(systemInfos);
                    this.initialized = 1;
                    this.listeners.forEach((listener) => {
                        listener.resolve();
                    });
                    SystemStatsRepositoryImpl.LOGGER.info("done");
                }, (err) => {
                    this.initialized = -1;
                    this.listeners.forEach((listener) => {
                        listener.reject(err);
                    });
                });
            }
        });
    }

    public getSystemStats(begin: number, end: number): Promise<Array<SystemStats>> {
        return this.init().then(() => {
            let result = this.statsTime.filter((item) => {
                return item >= begin && item <= end;
            }).map((time) => {
                return this.systemStatsMap.get(time);
            });
            return result;
        });
    }

    public getLatestStatsTime(): Promise<number> {
        return this.init().then(() => {
            if (this.statsTime.length === 0) return null;
            else return this.statsTime[0];
        });
    }

    public saveSystemStats(systemStats: SystemStats): Promise<void> {
        return this.init().then(() => {
            let time = systemStats.time;
            if (this.statsTime.findIndex((value, index, obj) => value === time) >= 0) {
                let currentStats = this.systemStatsMap.get(time);
                let mergedStats = this.mergeSystemStats(time, currentStats, systemStats);
                this.systemStatsMap.set(time, mergedStats);
            } else {
                this.statsTime.unshift(time);
                this.statsTime.sort().reverse();
                while (this.statsTime.length > SystemStatsRepositoryImpl.MAX_STATS) {
                    let deletedTime = this.statsTime.pop();
                    this.systemStatsMap.delete(deletedTime);
                }
                this.systemStatsMap.set(time, systemStats);
            }
        });
    }

    private mergeSystemStats(time: number, currentStats: SystemStats, newStats: SystemStats): SystemStats {

        let nodeMap: Map<string, SystemStatsNode> = new Map<string, SystemStatsNode>();
        currentStats.nodes.forEach((node) => nodeMap.set(node.name, {
            name: node.name,
            rpm: node.rpm,
            fpm: node.fpm
        }));
        newStats.nodes.forEach((node) => {
            if (nodeMap.has(node.name)) {
                let nodeStats: SystemStatsNode = nodeMap.get(node.name);
                nodeStats.rpm += node.rpm;
                nodeStats.fpm += node.fpm;
            } else {
                nodeMap.set(node.name, {
                    name: node.name,
                    rpm: node.rpm,
                    fpm: node.fpm
                });
            }
        });

        let linkMap: Map<string, SystemStatsLink> = new Map<string, SystemStatsLink>();
        currentStats.links.forEach((link) => linkMap.set(this.getLinkKey(link.source, link.target), {
            source: link.source,
            target: link.target,
            rpm: link.rpm,
            fpm: link.fpm
        }));
        newStats.links.forEach((link) => {
            let key = this.getLinkKey(link.source, link.target);
            if (linkMap.has(key)) {
                let linkStats: SystemStatsLink = linkMap.get(key);
                linkStats.rpm += link.rpm;
                linkStats.fpm += link.fpm;
            } else {
                linkMap.set(key, {
                    source: link.source,
                    target: link.target,
                    rpm: link.rpm,
                    fpm: link.fpm
                });
            }
        });

        let result: SystemStats = {
            time: time,
            nodes: new Array<SystemStatsNode>(),
            links: new Array<SystemStatsLink>()
        };

        nodeMap.forEach((stats, node) => result.nodes.push(stats));
        linkMap.forEach((stats, link) => result.links.push(stats));

        return result;
    }

}

export { SystemStatsRepository, SystemStatsRepositoryImpl };
