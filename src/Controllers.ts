import { NextFunction, Request, Response } from 'express';
import RequestDTO from './dto/Request';
import HttpException from './helpers/HttpException';

import _service from './Services';

export default class Controller {
    
    
    async create(req : RequestDTO, res: Response, next: NextFunction): Promise<Response|void>{
        
        const result = {}// await _service.verify(req.body);
            
        if (!req.body.urls || req.body.urls.length === 0)
            return next(new HttpException(400,'Nenhuma url foi enviada para processamento!'));
        
        const urls = req.body.urls;    
            
        console.log(urls)
            
        return res.status(200).json(result)
        
    }

}