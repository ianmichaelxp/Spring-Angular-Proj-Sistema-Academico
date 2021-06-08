import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estagio } from './estagio.model';

@Injectable({
  providedIn: 'root'
})
export class EstagioService {

  private url = 'http://localhost:3000';
  private endpoint = 'estagios';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Estagio[]>{
    return this.httpClient.get<Estagio[]>(`${this.url}/${this.endpoint}`);
  }
}
