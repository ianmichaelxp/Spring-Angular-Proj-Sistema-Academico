import { Usuario } from './usuario.model';
import { Curso } from './curso.model';
export interface Aluno {
  id: number;
  matricula: number;
  curso: Curso;
  usuario: Usuario;
}
