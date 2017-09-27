export interface NodeInfo {
    name: string;
    rpm: [ number, number, number ];
    fpm: [ number, number, number ];
}

export interface LinkInfo {
    source: string;
    target: string;
    rpm: [ number, number, number ];
    fpm: [ number, number, number ];
}

export interface SystemStats {
    time: number;
    nodes: Array<NodeInfo>;
    links: Array<LinkInfo>;
}
