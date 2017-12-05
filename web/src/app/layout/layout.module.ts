import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule, MatButtonModule, MatSelectModule, MatSnackBarModule, MatDialogModule } from "@angular/material";

import { OverwatchCommonModule } from "../common/common.module";
import { DiagramModule } from "../diagram/diagram.module";

import { Layout, LayoutNameInputDialog } from "./layout.component";
import { UserService } from "../common/user/user.service";
import { SystemInfoService } from "../common/system-info/system-info.service";
import { SystemFailureService } from "../common/system-failure/system-failure.service";

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        MatInputModule, MatButtonModule, MatSelectModule, MatSnackBarModule, MatDialogModule,
        OverwatchCommonModule, DiagramModule
    ],
    declarations: [ Layout, LayoutNameInputDialog ],
    entryComponents: [ LayoutNameInputDialog ],
    exports: [ Layout ],
    providers: [ UserService, SystemInfoService, SystemFailureService ]
})
export class LayoutModule { }
