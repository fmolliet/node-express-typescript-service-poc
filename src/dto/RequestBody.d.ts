import { ReqBody } from 'express';
export default interface RequestBody extends ReqBody {
    urls: Array<string>
}