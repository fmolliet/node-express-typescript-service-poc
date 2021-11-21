import { Request } from "express";
import RequestBody from './RequestBody'

export default interface RequestDTO implements Request{
    body: RequestBody
}