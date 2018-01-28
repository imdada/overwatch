import { configure, getLogger, Logger } from "log4js";
import { Config } from "./config";
configure(Config.get("log"));

export class Log {

    public static getLogger(name: string): Logger {
        return getLogger(name);
    }

}
