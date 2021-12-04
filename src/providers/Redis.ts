import Provider from "../models/Provider";
import IORedis, { Redis, RedisOptions } from "ioredis";
import { Logger } from "../helpers/Logger";

export default class RedisProvider implements Provider {
    
    client: Redis;
    EXPIRY_CACHE_TIME : number = parseInt(process.env.REDIS_EXPIRY_TIME || "600") 
    
    constructor( config : RedisOptions ){
        this.client = new IORedis( config );
        Logger.info('Using redis cache provider.')
    }
    
    async get(key: string): Promise<string | null> {
        return this.client.get(key);
    }
    
    async set(key: string, value: string): Promise<"OK"> {
        return this.client.setex(key, this.EXPIRY_CACHE_TIME, value);
    }
    
    async isConnected() : Promise<boolean|string> {
        
        return new Promise( (resolve, reject) => {
            
            this.client.on('error', ()=>{
                reject('Connection error with Redis.');
                this.client.quit();
            });
            
            this.client.on('ready', ()=>{
                resolve(true);
            });
        })
        
    }
}