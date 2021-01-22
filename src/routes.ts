import { Router, Request, Response } from 'express';

const routes = Router();

import UserController from './controllers/UserController';

routes.post("/users", UserController.store);

export default routes;