import { inject, injectable } from "inversify";
import TYPES from "../../common/types";
import { BaseDao } from "../../common/base-dao";
import { ModelDefinition } from "../../common/model-definition";
import { SystemFailureAttribute, SystemFailureInstance, SystemFailureDefinitions } from "./system-failure.model";

interface SystemFailureDao {
    getSystemFailure(system?: string, begin?: number, end?: number,  limit?: number): Promise<Array<SystemFailureInstance>>;
    saveSystemFailure(systemFailure: Array<SystemFailureAttribute>): Promise<Array<SystemFailureInstance>>;
}

@injectable()
class SystemFailureDaoImpl extends BaseDao<SystemFailureInstance, SystemFailureAttribute> implements SystemFailureDao {

    protected getModelDefinition(): ModelDefinition {
        return new SystemFailureDefinitions();
    }

    public getSystemFailure(system?: string, begin?: number, end?: number, limit?: number): Promise<Array<SystemFailureInstance>> {
        limit = limit || 1000;
        if (limit < 0) limit = 1;
        let searchParam: any = {
            where: { },
            limit: limit,
            order: [ [ "time", "DESC" ] ]
        };
        if (system !== undefined) searchParam.where.system = system;
        if (begin !== undefined || end !== undefined) {
            searchParam.where.time = { };
            if (begin !== undefined) searchParam.where.time.$gte = begin;
            if (end !== undefined) searchParam.where.time.$lte = end;
        }
        return this.init().then(() => {
            return this.toPromise(this.model.findAll(searchParam));
        });
    }

    public saveSystemFailure(systemFailure: Array<SystemFailureAttribute>): Promise<Array<SystemFailureInstance>> {
        return this.init().then(() => {
            return this.toPromise(this.model.bulkCreate(systemFailure));
        });
    }

}

export { SystemFailureDao, SystemFailureDaoImpl };
