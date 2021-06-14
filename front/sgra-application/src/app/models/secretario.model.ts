import { Curso } from './curso.model';
import { Usuario } from './usuario.model';
export interface Secretario {
  id: number;
  matricula: number;
  curso: Curso;
  usuario: Usuario;
}
