import { Tcc } from './tcc.model';
import { Professor } from './professor.model';
import { Aluno } from './aluno.model';
export interface CadastroTCC {

  id: number;
  tcc: Tcc;
  status: string;
  aluno: Aluno;
  orientador: Professor;
}
