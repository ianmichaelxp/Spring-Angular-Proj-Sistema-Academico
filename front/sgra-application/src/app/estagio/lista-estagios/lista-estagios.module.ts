import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';




import { ListaEstagiosRoutingModule } from './lista-estagios-routing.module';
import { ListaEstagiosComponent } from './lista-estagios/lista-estagios.component';


@NgModule({
  declarations: [ListaEstagiosComponent],
  imports: [
    CommonModule,
    ListaEstagiosRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class ListaEstagiosModule { }
