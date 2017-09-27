import { Injectable } from "@angular/core";

import { Connector } from "../connector.service";
import { SystemInfoMapDto, SystemInfoDetailMapDto } from "./system-info.dto";
import { SystemInfoVo, SystemInfoDetailVo } from "./system-info.vo";

@Injectable()
export class SystemInfoService {

    constructor(private connector: Connector) { }

    getSystemList(): Promise<Array<string>> {
        return this.connector.get<Array<string>>(`/system/list`);
    }

    getSystemInfoDetail(system: string, begin: number, end: number): Promise<Array<SystemInfoDetailVo>> {
        if (begin >= end) throw new Error("begin >= end");
        if (end - begin > 2 * 60 * 60) throw new Error("too large");
        return this.connector.get<SystemInfoDetailMapDto>(`/system/${ system }`, { begin: begin, end: end, detail: true, count: -1 })
        .then((data: any) => {
            return SystemInfoDetailVo.parse(data);
        });
    }

    getSystemInfo(system: string, begin: number, end: number): Promise<Array<SystemInfoVo>> {
        return this.connector.get<SystemInfoMapDto>(`/system/${ system }`, { begin: begin, end: end, count: -1 })
        .then((data: SystemInfoMapDto) => SystemInfoVo.parse(data));
    }

}
