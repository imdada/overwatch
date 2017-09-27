import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdSelectModule, MdProgressSpinnerModule } from "@angular/material";

import { OverwatchCommonModule } from "../common/common.module";
import { DiagramModule } from "../diagram/diagram.module";

import { SystemInfoService } from "../common/system-info/system-info.service";
import { SystemStatsService } from "../common/system-stats/system-stats.service";
import { SystemFailureService } from "../common/system-failure/system-failure.service";
import { Dashboard } from "./dashboard.component";
import { SystemDetail } from "./system-detail/system-detail.component";
import { SystemSummary } from "./system-summary/system-summary.component";
import { FailureRoller } from "./failure-roller/failure-roller.component";

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, MdSelectModule, MdProgressSpinnerModule,
               OverwatchCommonModule, DiagramModule ],
    declarations: [ Dashboard, SystemDetail, SystemSummary, FailureRoller ],
    entryComponents: [ SystemDetail ],
    exports: [ Dashboard ],
    providers: [ SystemInfoService, SystemStatsService, SystemFailureService ]
})
export class DashboardModule { }
