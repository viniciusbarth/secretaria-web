import Router, { request, response } from 'express';
import {getCustomRepository} from 'typeorm'

import TurmasRepository from './../repositories/TurmasRepository';
import CreateTurmasService from '../services/CreateTurmasService';
import ensureAuthenticated from '../middlewares/ensureAuthentication';

const turmasRouter = Router();

turmasRouter.use(ensureAuthenticated);

turmasRouter.get('/', async (request: any, response: any) => {

	const turmasRepository = getCustomRepository(TurmasRepository);

	const turmas = await turmasRepository.find();

	return response.json(turmas);
})

turmasRouter.post('/', async (request: any, response: any) => {

	const { nome, periodo } = request.body;

	const createTurma = new CreateTurmasService();
	const turma = await createTurma.execute({
		nome, 
		periodo
	});

	return response.json(turma);
})

export default turmasRouter;