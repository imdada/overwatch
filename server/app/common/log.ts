import * as log from "log4js";
import { Config } from "./config";
log.configure(Config.get("log") as log.IConfig);

export class Log {

    public static getLogger(name: string): log.Logger {
        return log.getLogger(name);
    }

}
