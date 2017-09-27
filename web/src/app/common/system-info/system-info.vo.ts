import { SystemInfoMapDto, SystemInfoDetailMapDto } from "./system-info.dto";

export interface SystemNodeInfo {
    name: string;
    rpm: number;
    fpm: number;
}

export class SystemInfoDetailVo {

    time: number;
    nodes: Array<SystemNodeInfo>;

    public static parse(data: SystemInfoDetailMapDto): Array<SystemInfoDetailVo> {
        let result: Array<SystemInfoDetailVo> = [ ];
        for (let time in data) {
            if (time === undefined) continue;
            let info: SystemInfoDetailVo = {
                time: parseInt(time, 10),
                nodes: [ ]
            };
            for (let host in data[time]) {
                if (host === undefined) continue;
                info.nodes.push({
                    name: data[time][host][0],
                    rpm: data[time][host][1],
                    fpm: data[time][host][2]
                });
            }
            result.push(info);
        }
        return result;
    }

}

export class SystemInfoVo {

    time: number;
    rpm: number;
    fpm: number;

    public static parse(data: SystemInfoMapDto): Array<SystemInfoVo> {
        let result: Array<SystemInfoVo> = [];
        for (let time in data) {
            if (time === undefined) continue;
            let vo: SystemInfoVo = new SystemInfoVo();
            vo.time = parseInt(time, 10);
            vo.rpm = data[time][0];
            vo.fpm = data[time][1];
            result.push(vo);
        }
        return result;
    }

}
