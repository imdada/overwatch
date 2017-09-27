import { SystemStatsDto, SystemStatsNodeDto, SystemStatsLinkDto } from "./system-stats.dto";

export class NodeInfo {

    name: string;
    rpm: Array<number>;
    fpm: Array<number>;

    constructor(data: SystemStatsNodeDto) {
        this.name = data[0];
        this.rpm = data[1];
        this.fpm = data[2];
    }

}

export class LinkInfo {

    source: string;
    target: string;
    rpm: Array<number>;
    fpm: Array<number>;

    constructor(data: SystemStatsLinkDto) {
        this.source = data[0];
        this.target = data[1];
        this.rpm = data[2];
        this.fpm = data[3];
    }

}

export class SystemStats {

    time: number;
    nodes: Array<NodeInfo>;
    links: Array<LinkInfo>;

    constructor(data: SystemStatsDto) {
        this.time = data.time;
        this.nodes = [];
        this.links = [];
        for (let node of data.nodes) this.nodes.push(new NodeInfo(node));
        for (let link of data.links) this.links.push(new LinkInfo(link));
    }

}
