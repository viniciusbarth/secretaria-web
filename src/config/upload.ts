import path from 'path'
import crypto from 'crypto';
import multer from 'multer';
import { request } from 'express';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname,'..', '..', 'temp'),
    filename(request, file, callback){
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}=${file.originalname}`;


      return callback(null, fileName);
    }
  })
}