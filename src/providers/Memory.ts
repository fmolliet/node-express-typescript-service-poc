import Provider from "../models/Provider";
import NodeCache from  "node-cache";
import MemoryConfig from "../config/MemoryConfig";
import { Logger } from "../helpers/Logger";

export default class MemoryProvider implements Provider {
    
    client: NodeCache = new NodeCache();
    
    constructor( config : MemoryConfig) {
        this.client = new NodeCache(config);
        Logger.info('Using memory cache provider.')
    }
    
    async get(key: string): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    
    async set(key: string, value: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}