import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estagio } from './estagio.model';

@Injectable({
  providedIn: 'root',
})
export class EstagioService {
  private url = 'http://localhost:3000';
  private endpoint = 'estagios';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Estagio[]> {
    return this.httpClient.get<Estagio[]>(`${this.url}/${this.endpoint}`);
  }

  cadastrar(estagio: Estagio): Observable<Estagio> {
    return this.httpClient.post<Estagio>(
      `${this.url}/${this.endpoint}`,
      estagio
    );
  }
  pesquisarPorId(id: string): Observable<Estagio> {
    return this.httpClient.get<Estagio>(`${this.url}/${this.endpoint}/${id}`);
  }

  atualizar(estagio: Estagio): Observable<Estagio> {
    return this.httpClient.put<Estagio>(
      `${this.url}/${this.endpoint}/${estagio.id}`,
      estagio
    );
  }

  deletar(estagio: Estagio): Observable<{}> {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${estagio.id}`);
  }
}
