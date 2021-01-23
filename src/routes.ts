import { Router, Request, Response } from 'express';

const routes = Router();

import authMiddleware from './middlewares/authMiddlewares';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

routes.post("/users", UserController.store);
routes.post("/auth", AuthController.authenticate);
routes.get('/users', authMiddleware, UserController.index);

export default routes;