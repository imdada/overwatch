import { injectable, inject } from "inversify";
import TYPES from "../../common/types";
import { SystemInfoInstance, SystemInfoAttribute } from "./system-info.model";
import { SystemInfoDto, SystemInfoMapDto, SystemInfoDetailMapDto } from "./system-info.dto";
import { SystemInfoDao } from "./system-info.dao";

interface SystemInfoService {
    getSystemList(): Promise<Array<string>>;
    getAllSystemInfo(begin: number): Promise<Array<SystemInfoDto>>;
    getSystemInfo(system: string, begin: number, end: number, count: number): Promise<SystemInfoMapDto>;
    getSystemInfoDetail(system: string, begin: number, end: number, count: number): Promise<SystemInfoDetailMapDto>;
    saveSystemInfo(systemInfos: Array<SystemInfoAttribute>): Promise<void>;
}

@injectable()
class SystemInfoServiceImpl implements SystemInfoService {

    constructor(@inject(TYPES.SystemInfoDao) private systemInfoDao: SystemInfoDao) { }

    public getSystemList(): Promise<Array<string>> {
        return this.systemInfoDao.getSystemList();
    }

    public getAllSystemInfo(begin: number): Promise<Array<SystemInfoDto>> {
        return this.systemInfoDao.getAllSystemInfo(begin)
        .then((systemInfos: Array<SystemInfoInstance>) => {
            return systemInfos.map((systemInfo: SystemInfoInstance) => {
                return {
                    id: systemInfo.id,
                    time: systemInfo.time,
                    name: systemInfo.name,
                    node: systemInfo.node,
                    source: systemInfo.source,
                    rpm: systemInfo.rpm,
                    fpm: systemInfo.fpm
                };
            });
        });
    }

    public getSystemInfo(system: string, begin: number, end: number, count: number): Promise<SystemInfoMapDto> {
        return this.systemInfoDao.getSystemInfo(system, begin, end, count)
        .then((systemInfos: Array<SystemInfoInstance>) => {
            let result: SystemInfoMapDto = {};
            systemInfos.forEach((item: SystemInfoInstance) => {
                let time: number = item.time;
                if (result[time] === undefined) result[time] = [0, 0];
                result[time][0] += item.rpm;
                result[time][1] += item.fpm;
            });
            return result;
        });
    }

    public getSystemInfoDetail(system: string, begin: number, end: number, count: number): Promise<SystemInfoDetailMapDto> {
        return this.systemInfoDao.getSystemInfo(system, begin, end, count)
        .then((systemInfos: Array<SystemInfoInstance>) => {
            let result: SystemInfoDetailMapDto = {};
            systemInfos.forEach((item: SystemInfoInstance) => {
                let time: number = item.time;
                if (result[time] === undefined) result[time] = [ ];
                result[time].push([item.node, item.rpm, item.fpm]);
            });
            return result;
        });
    }

    public saveSystemInfo(systemInfos: Array<SystemInfoAttribute>): Promise<void> {
        return this.systemInfoDao.saveSystemInfo(systemInfos)
        .then((result: Array<SystemInfoInstance>) => {
            return;
        });
    }

}

export { SystemInfoService, SystemInfoServiceImpl };
