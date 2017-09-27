import { inject, injectable } from "inversify";
import TYPES from "./types";
import { Config } from "./config";
import { Log } from "./log";
import { Socket } from "./socket-util";
import { Redis } from "./redis-util";

@injectable()
export class EventSource {

    private static readonly LOGGER = Log.getLogger("EventSource");
    private impl: any;

    constructor(
        @inject(TYPES.Socket) socket: Socket,
        @inject(TYPES.Redis) redis: Redis
    ) {
        const messagingConfig = Config.get("messaging");
        if (messagingConfig === "redis") {
            this.impl = redis;
            EventSource.LOGGER.info("using event source <redis>");
        } else {
            this.impl = socket;
            EventSource.LOGGER.info("using event source <socket>");
        }
    }

    public listen<T>(event: string, handler: (message: T) => void): void {
        this.impl.listen(event, (message: string) => {
            let obj: T;
            try {
                obj = <T>JSON.parse(message);
            } catch (e) {
                console.error(e);
                EventSource.LOGGER.error(`invalid message received for <${ event }>: ${ message }`);
            }
            if (obj !== undefined) handler(obj);
        });
    }

}
