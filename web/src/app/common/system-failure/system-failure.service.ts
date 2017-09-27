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
        if (opt.count === undefined) opt.count = 20;
        else {
            if (opt.count < 1) opt.count = 1;
            if (opt.count > 100) opt.count = 100;
        }
        return this.connector.get<Array<SystemFailureDto>>(url, opt);
    }

}
