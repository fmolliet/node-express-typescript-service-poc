import { NextFunction, Request, Response } from 'express';
import RequestDTO from './dto/RequestDto';
import HttpException from './helpers/HttpException';

import _service from './Services';

export default class Controller {
    
    
    async create(req : RequestDTO, res: Response, next: NextFunction): Promise<Response|void>{
            
        if (!req.body.urls 
            || req.body.urls.length === 0 
            || req.body.urls[0] === '' )
            return next(new HttpException(400,'Nenhuma url foi enviada para processamento!'));
        
        const urls = req.body.urls;    
        
        const validUrls = urls.filter(url  => {
            try {
                const link = new URL(url);
                return url;
            } catch ( err ){
                return false
            }
            
        });
        
        if( validUrls.length === 0 )
            return next(new HttpException(400,'Nenhuma url valida para processamento!'));
            
        console.log(validUrls)
            
        return res.status(200).json(validUrls)
        
    }

}