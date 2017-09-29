import { injectable, inject } from "inversify";
import TYPES from "../../common/types";
import * as express from "express";
import { SystemInfoService } from "./system-info.service";
import { SystemInfoMapDto, SystemInfoDetailMapDto } from "./system-info.dto";
import { ResponseWriter } from "../../common/response-writer";

interface SystemInfoController {
    getRouter(): express.Router;
}

@injectable()
class SystemInfoControllerImpl implements SystemInfoController {

    private errorHandler = (res: express.Response, next: Function) => {
        return (err: Error) => {
            next(err);
        };
    }

    constructor(@inject(TYPES.SystemInfoService) private systemInfoService: SystemInfoService) { }

    public getRouter(): express.Router {
        let router = express.Router();
        router.get("/list", this.getSystemList);
        router.get("/:system", this.getSystemInfo);
        return router;
    }

    private getSystemList = (req: express.Request, res: express.Response, next: Function): void => {
        this.systemInfoService.getSystemList()
        .then((systemList: Array<string>) => {
            ResponseWriter.success(res, systemList);
        })
        .then(null, this.errorHandler(res, next));
    }

    private getSystemInfo = (req: express.Request, res: express.Response, next: Function): void => {
        let system: string = req.params.system;
        let detail: boolean = req.query.detail === "true";
        let begin: number = parseInt(req.query.begin);
        let end: number = parseInt(req.query.end);
        let count: number = parseInt(req.query.count);
        if (system === null) {
            ResponseWriter.success(res, [ ]);
            return;
        }
        if (detail) {
            this.systemInfoService.getSystemInfoDetail(system, begin, end, count)
            .then((systemInfoList: SystemInfoDetailMapDto) => {
                ResponseWriter.success(res, systemInfoList);
            })
            .then(null, this.errorHandler(res, next));
        } else {
            this.systemInfoService.getSystemInfo(system, begin, end, count)
            .then((systemInfoList: SystemInfoMapDto) => {
                ResponseWriter.success(res, systemInfoList);
            })
            .then(null, this.errorHandler(res, next));
        }
    }

}

export { SystemInfoController, SystemInfoControllerImpl };
