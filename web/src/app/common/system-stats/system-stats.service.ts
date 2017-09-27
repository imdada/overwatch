import { Injectable } from "@angular/core";

import { Connector } from "../connector.service";
import { SystemStats } from "./system-stats.vo";
import { SystemStatsDto } from "./system-stats.dto";

@Injectable()
export class SystemStatsService {

    constructor(private connector: Connector) { }

    getSystemStats(): Promise<SystemStats> {
        return this.connector.get<SystemStatsDto>("/stats")
        .then((data: SystemStatsDto) => new SystemStats(data));
    }

}
