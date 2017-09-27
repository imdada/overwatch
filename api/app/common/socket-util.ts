import * as http from "http";
import * as https from "https";
import * as socket from "socket.io";
import { inject, injectable } from "inversify";
import TYPES from "./types";
import { Config } from "./config";
import { Log } from "./log";

class Listeners<T> {
    event: string;
    handler: (message: T) => void;
}

@injectable()
export class Socket {

    public static readonly topics = {
        systemFailure: "data_failure",
        systemStats: "data_stats",
    };

    private static readonly LOGGER = Log.getLogger("Socket");
    private socketServer: SocketIO.Server;
    private initialized = false;
    private sockets: Set<SocketIO.Socket> = new Set<SocketIO.Socket>();
    private listeners: Set<Listeners<any>> = new Set<Listeners<any>>();

    constructor() { }

    public initSocketServer(server: http.Server | https.Server): void {
        Socket.LOGGER.info("creating socket server...");
        this.socketServer = socket(server, Config.get("socket") || { });
        this.socketServer.on("connect", (socket: SocketIO.Socket) => {
            let socketId = socket.id;
            Socket.LOGGER.info(`socket <${ socketId }> connected`);
            this.sockets.add(socket);
            socket.on("disconnect", () => {
                Socket.LOGGER.info(`socket <${ socketId }> disconnected`);
                this.sockets.delete(socket);
            });
            socket.on("sub", (topic: string) => {
                socket.join(topic);
                Socket.LOGGER.info(`socket <${ socketId }> subscribed to <${ topic }>`);
            });
            socket.on("unsub", (topic: string) => {
                socket.leave(topic);
                Socket.LOGGER.info(`socket <${ socketId }> unsubscribed from <${ topic }>`);
            });
            this.listeners.forEach((listener: Listeners<any>) => this.registerEventHandler(socket, listener.event, listener.handler));
            this.initialized = true;
        });
        Socket.LOGGER.info("socket server created");
    }

    public broadcast(topic: string, message: any): void {
        try {
            this.socketServer.to(topic).emit(topic, message);
            Socket.LOGGER.info(`message sent to <${ topic }>`);
        } catch (ex) {
            Socket.LOGGER.error("failed to broadcast message", ex);
        }
    }

    public listen<T>(event: string, handler: (message: string) => void): void {
        if (this.initialized) {
            this.sockets.forEach((socket: SocketIO.Socket) => {
                this.registerEventHandler<T>(socket, event, handler);
            });
        } else {
            this.listeners.add({
                event: event,
                handler: handler
            });
        }
    }

    private registerEventHandler<T>(socket: SocketIO.Socket, event: string, handler: (message: string) => void): void {
        socket.on(event, handler);
    }

}
