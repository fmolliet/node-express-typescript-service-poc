import express, { Express } from 'express';
import cors       from 'cors';
import dotenv     from 'dotenv';

import Actuator from './config/Actuator';

const { config } = dotenv;

import routes     from './Routes';
import { Container } from 'typedi';
import ErrorHandler from './middlewares/ErrorHandler';

class App {
    app: Express;
    
    constructor() {
        config();
        this.app = express();
        this.initializeServices()
        this.initializeControllers();
        this.initializeMiddlewares();
    }
    
    initializeServices(){
        //const morganInstance = Container.get(Morgan)
        //this.express.use(morganInstance.getInstance());
    }
    
    initializeMiddlewares(){
        this.app.use(new ErrorHandler().handle)
    }
    
    initializeControllers(){
        this.app.use(Actuator)
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use('/', routes);
    }
}

export default new App().app;