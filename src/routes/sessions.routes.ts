import Router, { request, response } from 'express';

import AuthenticationUserService from '../services/AuthenticationUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request: any, response: any) => {

	try{

    const { email, password } = request.body;
    const authenticationUser = new AuthenticationUserService();

    const { user, token } = await authenticationUser.execute({
      email,
      password
    });

    delete user.password;

		return response.json({ user, token });
	}catch(err){
		return response.status(400).json({error: err.message})
	}
})

export default sessionsRouter;