import { Injectable } from "@angular/core";

import { Connector } from "../connector.service";
import { SystemFailureDto } from "./system-failure.dto";

export interface SystemFailureOptions {
    system?: string;
    count?: number;
    begin?: number;
    end?: number;
}

@Injectable()
export class SystemFailureService {

    constructor(private connector: Connector) { }

    getSystemFailure(opt: SystemFailureOptions): Promise<Array<SystemFailureDto>> {
        let url = "/failure";
        if (opt.system) url = `${ url }/${ opt.system }`;
        opt.system = undefined;
        return this.connector.get<Array<SystemFailureDto>>(url, opt);
    }

}
