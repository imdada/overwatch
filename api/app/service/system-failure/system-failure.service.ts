import { injectable, inject } from "inversify";
import TYPES from "../../common/types";
import { SystemFailureInstance } from "./system-failure.model";
import { SystemFailureDto } from "./system-failure.dto";
import { SystemFailureDao } from "./system-failure.dao";

interface SystemFailureService {
    getSystemFailure(system?: string, begin?: number, end?: number, limit?: number): Promise<Array<SystemFailureDto>>;
    saveSystemFailure(systemFailure: Array<SystemFailureDto>): Promise<Array<SystemFailureDto>>;
}

@injectable()
class SystemFailureServiceImpl implements SystemFailureService {

    constructor(@inject(TYPES.SystemFailureDao) private systemFailureDao: SystemFailureDao) { }

    private convertToDto(systemFailureInstance: SystemFailureInstance): SystemFailureDto {
        let systemFailureDto: SystemFailureDto = {
            id: systemFailureInstance.id,
            time: systemFailureInstance.time,
            system: systemFailureInstance.system,
            host: systemFailureInstance.host,
            url: systemFailureInstance.url,
            status: systemFailureInstance.status
        };
        return systemFailureDto;
    }

    public getSystemFailure(system?: string, begin?: number, end?: number, limit?: number): Promise<Array<SystemFailureDto>> {
        return this.systemFailureDao.getSystemFailure(system, begin, end, limit)
        .then((systemFailures: Array<SystemFailureInstance>) => {
            return systemFailures.map(this.convertToDto);
        });
    }

    public saveSystemFailure(systemFailures: Array<SystemFailureDto>): Promise<Array<SystemFailureDto>> {
        return this.systemFailureDao.saveSystemFailure(systemFailures)
        .then((failures: Array<SystemFailureInstance>) => {
            return failures.map(this.convertToDto);
        });
    }

}

export { SystemFailureService, SystemFailureServiceImpl };
