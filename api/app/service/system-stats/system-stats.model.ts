export interface SystemStatsNode {
    name: string;
    rpm: number;
    fpm: number;
}

export interface SystemStatsLink {
    source: string;
    target: string;
    rpm: number;
    fpm: number;
}

export interface SystemStats {
    time: number;
    nodes: Array<SystemStatsNode>;
    links: Array<SystemStatsLink>;
}
