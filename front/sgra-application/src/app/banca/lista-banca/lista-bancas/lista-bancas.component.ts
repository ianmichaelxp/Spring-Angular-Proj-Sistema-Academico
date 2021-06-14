import { Professor } from './../../../models/professor.model';
import { Observable } from 'rxjs';
import { BancaService } from '../../banca.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-bancas',
  templateUrl: './lista-bancas.component.html',
  styleUrls: ['./lista-bancas.component.scss'],
})
export class ListaBancasComponent implements OnInit {
  toppings = new FormControl();
  // bancas$: Observable<Banca[]>;
  professores$: Observable<Professor[]>;
  data: Date;

  constructor(private bancaService: BancaService) {}

  colunasTabela = ['data', 'banca'];

  ngOnInit(): void {}

  // listarBancas(): void{
  //   this.bancas$ = this.bancaService.listar();
  // }
}
