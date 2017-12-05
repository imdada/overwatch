import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule, MatAutocompleteModule, MatButtonModule,
         MatNativeDateModule, MatDatepickerModule, MatProgressSpinnerModule } from "@angular/material";

import { OverwatchCommonModule } from "../common/common.module";
import { DiagramModule } from "../diagram/diagram.module";

import { History } from "./history.component";
import { SystemInfoService } from "../common/system-info/system-info.service";
import { SystemFailureService } from "../common/system-failure/system-failure.service";

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        MatInputModule, MatAutocompleteModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatProgressSpinnerModule,
        OverwatchCommonModule, DiagramModule
    ],
    declarations: [ History ],
    exports: [ History ],
    providers: [ SystemInfoService, SystemFailureService ]
})
export class HistoryModule { }
