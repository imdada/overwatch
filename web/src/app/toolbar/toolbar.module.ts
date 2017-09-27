import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverwatchCommonModule } from "../common/common.module";

import { Toolbar } from "./toolbar.component";

@NgModule({
    imports: [ CommonModule, OverwatchCommonModule ],
    declarations: [ Toolbar ],
    exports: [ Toolbar ],
    providers: [ ]
})
export class ToolbarModule { }
