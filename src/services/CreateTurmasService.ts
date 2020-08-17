import { getCustomRepository } from "typeorm";

import Turma from "../models/Turma";
import TurmasRepository from "../repositories/TurmasRepository";


interface Request{
  nome: string,
  periodo: string
}

class CreateTurmasService{
  public async execute({ nome, periodo} : Request): Promise<Turma>{
    
    const turmasRepository = getCustomRepository(TurmasRepository);

    const turma = turmasRepository.create({
      nome,
      periodo
    })

    await turmasRepository.save(turma);

    return turma;
  }

}
export default CreateTurmasService;