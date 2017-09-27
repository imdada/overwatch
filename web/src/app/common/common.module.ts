import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { JoinPipe } from "./join.pipe";
import { TimestampPipe } from "./timestamp.pipe";
import { Connector } from "./connector.service";
import { SocketService } from "./socket.service";

@NgModule({
    imports: [
        HttpModule, BrowserAnimationsModule
    ],
    declarations: [ JoinPipe, TimestampPipe ],
    exports: [ JoinPipe, TimestampPipe ],
    providers: [ Connector, SocketService ]
})
export class OverwatchCommonModule { }
