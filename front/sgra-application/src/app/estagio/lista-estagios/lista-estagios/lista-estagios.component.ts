import { Observable } from 'rxjs';
import { EstagioService } from './../../estagio.service';
import { Component, OnInit } from '@angular/core';
import { Estagio } from '../../../models/estagio.model';

@Component({
  selector: 'app-lista-estagios',
  templateUrl: './lista-estagios.component.html',
  styleUrls: ['./lista-estagios.component.scss']
})
export class ListaEstagiosComponent implements OnInit {

  estagios$: Observable<Estagio[]>;
  constructor(private estagioService: EstagioService) { }

  colunasTabela = ['estagio', 'aluno', 'orientador', 'status'];

  ngOnInit(): void {
    this.listarEstagios();
  }

  listarEstagios(): void{
    this.estagios$ = this.estagioService.listar();
  }

}
