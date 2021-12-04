import { RedisOptions } from "ioredis";

const DEFAULT_PORT = "6379";
const DEFAULT_HOST = "127.0.0.1";


export default class RedisConfig implements RedisOptions {
    port : number = parseInt( process.env.REDIS_PORT || DEFAULT_PORT );
    host : string = process.env.REDIS_HOST || DEFAULT_HOST;
}
