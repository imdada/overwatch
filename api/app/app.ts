import * as http from "http";
import * as express from "express";
import { container } from "./inversify.config";
import { Server } from "./server";
import TYPES from "./common/types";
import { Log } from "./common/log";
import { Socket } from "./common/socket-util";
import { CommonHandlers } from "./common/handlers";
import { ResponseWriter } from "./common/response-writer";
import { SystemInfoController } from "./service/system-info/system-info.controller";
import { SystemStatsController } from "./service/system-stats/system-stats.controller";
import { SystemFailureController } from "./service/system-failure/system-failure.controller";

export class Application {

    private static readonly LOGGER = Log.getLogger("Application");
    private _httpHandler: express.Application;

    get httpHandler(): (req: http.IncomingMessage, res: http.ServerResponse) => void {
        return this._httpHandler;
    }

    public constructor() {
        this._httpHandler = express();
    }

    public start(): Promise<void> {
        Application.LOGGER.info("loading app...");
        return new Promise<void>((resolve, reject) => {

            let commonHandlers: CommonHandlers = new CommonHandlers();
            commonHandlers.handlers.forEach(handler => this._httpHandler.use(handler));

            let systemInfoController: SystemInfoController = container.get<SystemInfoController>(TYPES.SystemInfoController);
            this._httpHandler.use("/system", systemInfoController.getRouter());

            let systemStatsController: SystemStatsController = container.get<SystemStatsController>(TYPES.SystemStatsController);
            this._httpHandler.use("/stats", systemStatsController.getRouter());

            let systemFailureController: SystemFailureController = container.get<SystemFailureController>(TYPES.SystemFailureController);
            this._httpHandler.use("/failure", systemFailureController.getRouter());

            this._httpHandler.use(commonHandlers.errorHandler);
            Application.LOGGER.info("app loaded");
            return resolve();
        });
    }

    public initSocket(server: Server): void {
        let socket: Socket = container.get<Socket>(TYPES.Socket);
        socket.initSocketServer(server.server);
    }

    public close(): Promise<void> {
        Application.LOGGER.info("closing app...");
        let socket: Socket = container.get<Socket>(TYPES.Socket);
        return new Promise<void>((resolve, reject) => {
            resolve();
        });
    }

}
