export interface SystemInfoDto {
    id: number;
    time: number;
    name: string;
    node: string;
    source: string;
    rpm: number;
    fpm: number;
}

// compact format to minimize data transfer costs
export interface SystemInfoMapDto {
    [time: number]: [number, number];
}

// compact format to minimize data transfer costs
export interface SystemInfoDetailMapDto {
    [time: number]: Array<[string, number, number]>;
}
