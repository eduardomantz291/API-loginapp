import { Router, Request, Response } from 'express';

const routes = Router();

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

routes.post("/users", UserController.store);
routes.post("/auth", AuthController.authenticate);

export default routes;