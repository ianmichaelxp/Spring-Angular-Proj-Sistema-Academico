import { Secretario } from './secretario.model';
import { Professor } from './professor.model';
export interface Curso {
  id: number;
  coordenador: Professor;
  professores: Professor[];
  secretarios: Secretario[];
}
