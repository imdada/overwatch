import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";

import { routing } from "./app.routing";
import { OverwatchCommonModule } from "./common/common.module";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { HistoryModule } from "./history/history.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LayoutModule } from "./layout/layout.module";

import { AppComponent } from "./app.component";
@NgModule({
    imports: [
        BrowserModule,
        ToolbarModule,
        HistoryModule,
        DashboardModule,
        LayoutModule,
        OverwatchCommonModule,
        routing
    ],
    declarations: [ AppComponent ],
    providers: [ { provide: APP_BASE_HREF, useValue: "/" } ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
