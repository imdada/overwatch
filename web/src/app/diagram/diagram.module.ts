import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverwatchCommonModule } from "../common/common.module";
import { RequestsTimeChart } from "./requests-time-chart/chart.component";
import { SystemsRpcGraph } from "./systems-rpc-graph/graph.component";
import { LayoutEditor } from "./layout-editor/layout-editor.component";

@NgModule({
    imports: [ CommonModule, OverwatchCommonModule ],
    declarations: [ RequestsTimeChart, SystemsRpcGraph, LayoutEditor ],
    exports: [ RequestsTimeChart, SystemsRpcGraph, LayoutEditor ]
})
export class DiagramModule { }
