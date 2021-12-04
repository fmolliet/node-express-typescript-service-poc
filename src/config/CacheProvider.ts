import { Service } from "typedi";
import { Logger } from "../helpers/Logger";
import Provider from "../models/Provider";
import MemoryProvider from "../providers/Memory";
import RedisProvider from "../providers/Redis";
import MemoryConfig from "./MemoryConfig";
import RedisConfig from "./RedisConfig";

@Service()
export default class CacheProvider {
    
    provider: Provider;
    
    constructor( provider : Provider ){
        this.provider = provider;
    }

    async getInstance() : Promise<CacheProvider> {
        
        try {
            let provider = new RedisProvider( new RedisConfig() );
        
            if ( await provider.isConnected() ){
                return new CacheProvider( provider );
            }
        } catch( err ){
            Logger.error(err)
        }
        
        return new CacheProvider( new MemoryProvider( new MemoryConfig() ) );
    }
    
    
    async get(key: string): Promise<string | null> {
        return await this.provider.get(key);
    }
    
    async set(key: string, value: string): Promise<"OK"|void> {
        return await this.provider.set( key, value );
    }
    
}