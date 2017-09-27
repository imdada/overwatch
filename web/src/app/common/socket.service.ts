import { Injectable } from "@angular/core";
import * as scoket from "socket.io-client";

import { environment } from "../../environments/environment";

@Injectable()
export class SocketService {

    private url: string = environment.apiUrl;
    private socket: SocketIOClient.Socket;

    constructor() {
        this.init();
    }

    init(): void {
        let socketUrl: URL = new URL(this.url);
        let socketPath = "socket";
        let path: string;
        if (socketUrl.pathname.endsWith("/"))
            path = `${ socketUrl.pathname }${ socketPath }`;
        else
            path = `${ socketUrl.pathname }/${ socketPath }`;
        this.socket = scoket.connect(socketUrl.origin, { path: path });
        this.socket.on("connect", () => console.log("socket connected"));
        this.socket.on("disconnect", () => console.log("socket disconnected"));
        this.socket.on("error", (error: string) => console.error(`scoket error: "${ error }"`));
    }

    getSystemFailureTopic(): string {
        return "data_failure";
    }

    getSystemStatsTopic(): string {
        return "data_stats";
    }

    subscribe(topic: string, handler): void {
        if (topic === null || topic === undefined) return;
        this.socket.emit("sub", topic);
        this.socket.on(topic, handler);
        console.log(`subscribed to ${ topic }`);
    }

    unsubscribe(topic: string): void {
        if (topic === null || topic === undefined) return;
        this.socket.emit("unsub", topic);
        console.log(`unsubscribed from ${ topic }`);
    }

}
