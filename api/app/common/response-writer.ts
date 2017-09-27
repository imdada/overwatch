import * as express from "express";
import { Log } from "./log";

export class ResponseWriter {

    private static accessLogger = Log.getLogger("access");

    public static send(res: express.Response, status: number, payload: string): void {
        this.accessLogger.info("<" + res.reqId + ">", status, payload);
        res.status(status).type("json").send(payload);
    }

    public static success(res: express.Response, data?: any, msg?: string): void {
        let payload: string = JSON.stringify({
            status: 200,
            msg: msg || "success",
            data: data || null
        });
        ResponseWriter.send(res, 200, payload);
    }

    public static error(res: express.Response, status: number, msg?: string): void {
        status = status || 500;
        let payload: string = JSON.stringify({
            status: status,
            msg: msg || "error",
            data: null
        });
        ResponseWriter.send(res, status, payload);
    }

}
