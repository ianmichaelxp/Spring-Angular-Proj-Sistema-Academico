import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tcc } from './tcc.model';

@Injectable({
  providedIn: 'root',
})
export class TccService {
  private url = 'http://localhost:3000';
  private endpoint = 'tccs';

  constructor(private httpClient: HttpClient) {}

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
}
