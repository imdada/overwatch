import { inject, injectable } from "inversify";
import TYPES from "../../common/types";
import { BaseDao } from "../../common/base-dao";
import { ModelDefinition } from "../../common/model-definition";
import { SystemInfoAttribute, SystemInfoInstance, SystemInfoDefinitions } from "./system-info.model";

interface SystemInfoDao {
    getSystemList(): Promise<Array<string>>;
    getLastestInfoTime(system: string, duration: number): Promise<number>;
    getSystemInfo(system: string, begin?: number, end?: number, count?: number): Promise<Array<SystemInfoInstance>>;
    saveSystemInfo(systemInfo: Array<SystemInfoAttribute>): Promise<Array<SystemInfoInstance>>;
    getAllSystemInfo(begin: number): Promise<Array<SystemInfoInstance>>;
}

@injectable()
class SystemInfoDaoImpl extends BaseDao<SystemInfoInstance, SystemInfoAttribute> implements SystemInfoDao {

    protected getModelDefinition(): ModelDefinition {
        return new SystemInfoDefinitions();
    }

    public getLastestInfoTime(system: string, duration: number): Promise<number> {
        return this.init().then(() => {
            return this.toPromise(this.model.findAll({
                attributes: [ "time" ],
                where: { name: system },
                group: [ "time" ],
                order: [ [ "time", "DESC" ] ],
                limit: duration
            }));
        }).then((result) => {
            const len = result.length;
            if (len === 0) return null;
            return result[len - 1].time;
        });
    }

    public getSystemList(): Promise<Array<string>> {
        return this.init().then(() => {
            return this.toPromise(this.model.aggregate("name", "DISTINCT", { plain: false }));
        }).then((systemInfoList: any) => {
            return systemInfoList.map((r) => r.DISTINCT);
        });
    }

    public getSystemInfo(system: string, begin?: number, end?: number, count?: number): Promise<Array<SystemInfoInstance>> {
        let searchParam: any = {
            where: { name: system },
            order: [ [ "time", "DESC" ] ]
        };
        if (count && count > 0) searchParam.limit = count;
        else if (count !== -1) searchParam.limit = 20;
        if (begin || end) {
            searchParam.where["time"] = {};
            if (begin) searchParam.where.time["$gte"] = begin;
            if (end) searchParam.where.time["$lte"] = end;
        }
        return this.init().then(() => {
            return this.toPromise(this.model.findAll(searchParam));
        });
    }

    public saveSystemInfo(systemInfo: Array<SystemInfoAttribute>): Promise<Array<SystemInfoInstance>> {
        return this.init().then(() => {
            return this.toPromise(this.model.bulkCreate(systemInfo));
        });
    }

    public getAllSystemInfo(begin: number): Promise<Array<SystemInfoInstance>> {
        return this.init().then(() => {
            return this.toPromise(this.model.findAll({
                where: {
                    time: {
                        $gte: begin
                    }
                }
            }));
        });
    }

}

export { SystemInfoDao, SystemInfoDaoImpl };
