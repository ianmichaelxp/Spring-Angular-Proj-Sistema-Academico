import { Observable } from 'rxjs';
import { TccService } from '../../tcc.service';
import { Component, OnInit } from '@angular/core';
import { Tcc } from '../../../models/tcc.model';

@Component({
  selector: 'app-lista-tccs',
  templateUrl: './lista-tccs.component.html',
  styleUrls: ['./lista-tccs.component.scss']
})
export class ListaTccsComponent implements OnInit {

  tccs$: Observable<Tcc[]>;
  constructor(private tccService: TccService) { }

  colunasTabela = ['titulo', 'cronograma', 'documento', 'banca'];

  ngOnInit(): void {
    this.listarTccs();
  }

  listarTccs(): void{
    this.tccs$ = this.tccService.listar();
  }

}
