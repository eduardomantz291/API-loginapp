import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../entity/models/User';

class UserController {
  async index(req: Request, res: Response) {
    return res.send({ userID: req.userId });
  }

  async store(req: Request, res: Response) {
    const UserRepository = getRepository(User);
    const { name, email, password } = req.body;

    const userExists = await UserRepository.findOne({ where: { email } });

    if (userExists) {
      return res.sendStatus(409);
    }

    const user = UserRepository.create({ name, email, password });

    await UserRepository.save(user);

    return res.json(user);
  } 
}

export default new UserController();