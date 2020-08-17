import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth'

interface TokenPayload{
  iat: number,
  exp: number,
  sub: string
}

export default function ensureAuthentication(request: Request, response: Response, next: NextFunction): void {
  
  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new Error('Token JWT não foi encontrado');
  }

  const [, token] = authHeader.split(' ')

  try{
    const decoded = verify(token, authConfig.jwt.secret)

    console.log(decoded)
    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    }


    return next();

  }catch {
    throw new Error('Token inválido');
  }
}