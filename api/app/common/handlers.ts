import * as http from "http";
import * as uuid from "uuid";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as express from "express";
import { Config } from "./config";
import { Log } from "./log";
import { ResponseWriter } from "./response-writer";

export class CommonHandlers {

    private _handlers: Array<(req: express.Request, res: express.Response, next: express.NextFunction) => any>;
    private _errorHandler: (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => any;

    get handlers() {
        return this._handlers;
    }

    get errorHandler() {
        return this._errorHandler;
    }

    public constructor() {

        let corsHandler = cors({
            origin: Config.get("corsDomain"),
            credentials: true
        });

        let bodyParserHandler = bodyParser.json();

        let accessLogger = Log.getLogger("access");
        let loggingHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
            let method: string = req.method;
            let url: string = req.originalUrl;
            let headers: string = JSON.stringify(req.headers);
            let body: string = JSON.stringify(req.body);
            req.id = uuid.v1();
            res.reqId = req.id;
            accessLogger.info("<" + req.id + ">", method, url, headers, body);
            next();
        };

        this._handlers = [ corsHandler, bodyParserHandler, loggingHandler ];
        this._errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.error(err.stack);
            ResponseWriter.error(res, 500);
        };

    }

}
