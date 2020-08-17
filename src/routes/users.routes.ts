import Router from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload'
import CreateUserService from '../services/CreateUserService';
import ensureAuthentication from '../middlewares/ensureAuthentication';


const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.post('/', async (request: any, response: any) => {

	try{

		const { name, email, password} = request.body;

		const createUser = new CreateUserService();

		const user = await createUser.execute({
			name,
			email,
			password
		});

		delete user.password;

		return response.json(user);
	}catch(err){
		return response.status(400).json({error: err.message})
	}
})

usersRouter.patch('/avatar',ensureAuthentication, upload.single('avatar'), async(request: any, response: any)=>{
	return response.json({ok: true});
})

export default usersRouter;