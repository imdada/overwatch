import { injectable, inject } from "inversify";
import * as express from "express";
import TYPES from "../../common/types";
import { Log } from "../../common/log";
import { Socket } from "../../common/socket-util";
import { EventSource } from "../../common/event-source";

import { SystemFailureService } from "./system-failure.service";
import { SystemFailureDto } from "./system-failure.dto";
import { ResponseWriter } from "../../common/response-writer";

interface SystemFailureController {
    getRouter(): express.Router;
}

@injectable()
class SystemFailureControllerImpl implements SystemFailureController {

    private static readonly LOGGER = Log.getLogger("SystemFailureController");

    private errorHandler = (res: express.Response, next: Function) => {
        return (err: Error) => {
            next(err);
        };
    }

    constructor(
        @inject(TYPES.Socket) private socket: Socket,
        @inject(TYPES.EventSource) private eventSource: EventSource,
        @inject(TYPES.SystemFailureService) private systemFailureService: SystemFailureService
    ) {
        this.socket = socket;
        this.systemFailureService = systemFailureService;
        eventSource.listen<SystemFailureDto>("submit_failure", this._saveSystemFailure);
    }

    private _saveSystemFailure = (systemFailure: SystemFailureDto): void => {
        // TODO: batch save & rate limit
        systemFailure.id = undefined;
        this.systemFailureService.saveSystemFailure([ systemFailure ]);
        this.socket.broadcast(Socket.topics.systemFailure, systemFailure);
    }

    public getRouter(): express.Router {
        let router = express.Router();
        router.get("", this.getLatestSystemFailure);
        router.get("/:system", this.getSystemFailure);
        router.post("/", this.saveSystemFailure);
        return router;
    }

    private saveSystemFailure = (req: express.Request, res: express.Response, next: Function) => {
        let systemFailure: SystemFailureDto = req.body;
        this._saveSystemFailure(systemFailure);
        ResponseWriter.success(res);
    }

    private getLatestSystemFailure = (req: express.Request, res: express.Response, next: Function) => {
        let count = parseInt(req.query.count) || undefined;
        let begin = req.query.begin || Math.round(new Date().getTime() / 1000) - 3 * 60 * 60;
        this.systemFailureService.getSystemFailure(undefined, begin, undefined, count)
        .then((systemFailures) => {
            ResponseWriter.success(res, systemFailures);
        })
        .then(null, this.errorHandler(res, next));
    }

    private getSystemFailure = (req: express.Request, res: express.Response, next: Function) => {
        let system = req.params.system;
        let count = parseInt(req.query.count) || 20;
        count = count < 100 ? count : 100;
        let begin = parseInt(req.query.begin) || undefined;
        let end = parseInt(req.query.end) || undefined;
        this.systemFailureService.getSystemFailure(system, begin, end, count)
        .then((systemFailures) => {
            ResponseWriter.success(res, systemFailures);
        })
        .then(null, this.errorHandler(res, next));
    }

}

export { SystemFailureController, SystemFailureControllerImpl };
