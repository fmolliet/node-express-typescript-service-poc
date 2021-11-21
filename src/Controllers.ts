import { Request, Response } from 'express';
import RequestDTO from './dto/Request';

import _service from './Services';

export default class Controller {
    
    
    async create(req : RequestDTO, res: Response): Promise<Response>{
        
        try{
            const result = {}// await _service.verify(req.body);
            
            const urls = req.body.urls;
            
            console.log(urls)
            
            return res.status(200).json(result)
        }catch (err: any){
            return res.status(500).json({message: err.message ? err.message : err});
        }
    }

}