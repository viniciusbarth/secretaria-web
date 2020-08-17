import {Router, request, response} from 'express';
import turmasRouter from './turmas.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();


routes.use('/turmas', turmasRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;