
import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../config/auth';

interface Request{
  email: string,
  password: string
}

interface Response{
  user: User,
  token: string
}

class AuthenticationUserService{

  public async execute({ email, password }: Request): Promise<Response>{

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: {email}})

    if(!user){
      throw new Error('Email ou senha incorretos!')
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched){
      throw new Error('Email ou senha incorretos!')
    }

    const token = sign({}, authConfig.jwt.secret,{
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn
    });

    return {
      user,
      token
    }

  }

}

export default AuthenticationUserService