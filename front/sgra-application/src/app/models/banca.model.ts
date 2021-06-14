import { Professor } from './professor.model';

export interface Banca {
  id: number;
  integrantes: Professor[];
  data: string;
}
