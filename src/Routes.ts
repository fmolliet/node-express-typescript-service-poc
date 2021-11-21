import { Router } from 'express';

import Controller from './Controllers';

const controller = new Controller();

const routes = Router();

routes.post('/create', controller.create);

export default routes;