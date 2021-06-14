import { Usuario } from './usuario.model';
import { Curso } from './curso.model';

export interface Professor {
  id: number;
  matricula: number;
  curso: string;
  usuario: string;
}
