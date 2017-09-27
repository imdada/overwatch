export type SystemStatsNodeDto = [string, Array<number>, Array<number>];
export type SystemStatsLinkDto = [string, string, Array<number>, Array<number>];

export interface SystemStatsDto {
    time: number;
    nodes: Array<SystemStatsNodeDto>;
    links: Array<SystemStatsLinkDto>;
}

export interface SingleServerStatsInput {
    time: number;
    system: string;
    stats: RpcStatsInput;
}

export interface ServerStatsInput {
    [host: string]: {
        rpm: number;
        fpm: number;
    };
}

export interface RpcStatsInput {
    [target: string]: ServerStatsInput;
}

export interface SystemStatsInput {
    [system: string]: RpcStatsInput;
}
