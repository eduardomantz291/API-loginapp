import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../entity/models/User';

class UserController {
  store(req: Request, res: Response) {
    const UserRepository = getRepository()  
  } 
}

export default new UserController();