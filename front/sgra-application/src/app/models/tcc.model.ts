import { Banca } from './banca.model';
export interface Tcc {
  id: number;
  titulo: string;
  cronograma: string;
  documento: string;
  banca: Banca;
}
