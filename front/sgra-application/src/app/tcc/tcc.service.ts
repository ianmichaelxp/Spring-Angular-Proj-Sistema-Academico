import { Aluno } from './../models/aluno.model';
import { Professor } from './../models/professor.model';
import { Banca } from './../models/banca.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tcc } from '../models/tcc.model';

@Injectable({
  providedIn: 'root',
})
export class TccService {
  private url = 'http://localhost:3000';
  private endpoint = 'tccs';
  private listaTccs: Tcc[];

  constructor(private httpClient: HttpClient) {
    this.listaTccs = [];
  }

  get tccs(): Tcc[]{
    return this.listaTccs;
  }

  listar(): Observable<Tcc[]> {
    return this.httpClient.get<Tcc[]>(`${this.url}/${this.endpoint}`);
    }

  cadastrar(tcc: Tcc): Observable<Tcc> {
    return this.httpClient.post<Tcc>(
      `${this.url}/${this.endpoint}`,
      tcc
    );
  }
  pesquisarPorId(id: string): Observable<Tcc> {
    return this.httpClient.get<Tcc>(`${this.url}/${this.endpoint}/${id}`);
  }

  atualizar(tcc: Tcc): Observable<Tcc> {
    return this.httpClient.put<Tcc>(
      `${this.url}/${this.endpoint}/${tcc.id}`,
      tcc
    );
  }

  deletar(tcc: Tcc): Observable<{}> {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${tcc.id}`);
  }

  listarBancas(): Observable<Banca[]> {
    return this.httpClient.get<Banca[]>(`${this.url}/bancas`);
  }

  listarOrientadores(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(`${this.url}/professores`);
  }

  listarAlunos(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(`${this.url}/alunos`);
  }
}
