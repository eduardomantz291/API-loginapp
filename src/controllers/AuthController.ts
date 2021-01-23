import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../entity/models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const UserRepository = getRepository(User);
    const { email, password } = req.body;    

    const user = await UserRepository.findOne({ where: { email } });

    if (!user) {
      return res.send({ mensage: 'there is no user with this email' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.send({ mensage: 'Oops! password is wrong' });
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

    delete user.password;

    return res.json({user, token});
  } 
}

export default new AuthController();