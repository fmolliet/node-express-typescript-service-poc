import { Request } from 'express';
import RequestBody from './RequestBody';

export default interface RequestDTO extends Request {
    body: RequestBody
}