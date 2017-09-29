import * as redis from "redis";
import { inject, injectable } from "inversify";
import TYPES from "./types";
import { Config } from "./config";

@injectable()
export class Redis {

    private client: redis.RedisClient;
    private handlers: Map<string, (string) => void> = new Map<string, (string) => void>();
    private initialized = false;

    constructor() { }

    public init(): void {
        const redisConfig = Config.get("redis");
        const host = redisConfig.host || "127.0.0.1";
        const port = redisConfig.port || 6379;
        this.client = redis.createClient(port, host);
        this.client.on("message", (channel: string, message: string) => {
            if (!this.handlers.has(channel)) return;
            const handler = this.handlers.get(channel);
            handler(message);
        });
        this.initialized = true;
    }

    public listen<T>(event: string, handler: (message: string) => void): void {
        if (!this.initialized) this.init();
        this.handlers.set(event, handler);
        this.client.subscribe(event);
    }

}
