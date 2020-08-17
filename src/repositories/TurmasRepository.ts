import { EntityRepository, Repository} from 'typeorm'


import Turma from '../models/Turma';

interface CreateTurmaDTO{
	nome: string;
	periodo: string;
}

@EntityRepository(Turma)
class TurmasRepository extends Repository<Turma>{

	


}
export default TurmasRepository;