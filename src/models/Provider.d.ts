import { Redis} from "ioredis";
import NodeCache from  "node-cache";

export default interface Provider {
    
    client: NodeCache | Redis;
    
    async set(key: string, value: string) : Promise<"OK"|void |never>;
    
    async get(key: string) : Promise<string | null>;
}