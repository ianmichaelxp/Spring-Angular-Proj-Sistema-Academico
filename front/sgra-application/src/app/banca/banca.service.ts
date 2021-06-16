import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banca } from '../models/banca.model';
import { Professor } from '../models/professor.model';

@Injectable({
  providedIn: 'root',
})
export class BancaService {
  private url = 'http://localhost:3000';
  private endpoint = 'bancas';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Banca[]> {
    return this.httpClient.get<Banca[]>(`${this.url}/${this.endpoint}`);
    }

  cadastrar(banca: Banca): Observable<Banca> {
    return this.httpClient.post<Banca>(
      `${this.url}/${this.endpoint}`,
      banca
    );
  }
  pesquisarPorId(id: string): Observable<Banca> {
    return this.httpClient.get<Banca>(`${this.url}/${this.endpoint}/${id}`);
  }

  atualizar(banca: Banca): Observable<Banca> {
    return this.httpClient.put<Banca>(
      `${this.url}/${this.endpoint}/${banca.id}`,
      banca
    );
  }

  deletar(banca: Banca): Observable<{}> {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${banca.id}`);
  }

  listarProfessores(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(`${this.url}/professores`);
  }
}
