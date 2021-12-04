import express, { Express } from 'express';
import cors       from 'cors';
import dotenv     from 'dotenv';
import morgan     from 'morgan';
import Actuator from './config/Actuator';

const { config } = dotenv;

import routes     from './Routes';
import { Container, Inject } from 'typedi';
import ErrorHandler from './middlewares/ErrorHandler';
import CacheProvider from './config/CacheProvider';

class App {
    app: Express;
    
    @Inject()
    cacheInstance: CacheProvider = Container.get(CacheProvider);
    
    constructor() {
        config();
        this.app = express();
        this.initializeServices()
        this.initializeControllers();
        this.initializeMiddlewares();
        
    }
    
    async initializeServices(){
        //const morganInstance = Container.get(Morgan)
        //this.express.use(morganInstance.getInstance());
        this.cacheInstance = await this.cacheInstance.getInstance();
    }
    
    initializeMiddlewares(){
        this.app.use(new ErrorHandler().handle);
    }
    
    initializeControllers(){
        this.app.use(Actuator)
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(morgan(`short`));
        this.app.use('/', routes);
    }
}

export default new App().app;