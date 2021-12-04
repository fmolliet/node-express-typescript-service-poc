import { Options } from "node-cache";

const DEFAULT_STDTTL = "0";
const DEFAULT_PERIOD = "600"

export default class MemoryConfig implements Options {
    stdTTL      : number = parseInt( process.env.MEMORY_STDTTL || DEFAULT_STDTTL );
    checkperiod : number = parseInt( process.env.MEMORY_PERIOD || DEFAULT_PERIOD );
}
