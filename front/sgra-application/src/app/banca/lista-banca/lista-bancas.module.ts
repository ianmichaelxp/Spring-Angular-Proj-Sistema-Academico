import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { ListaBancasRoutingModule } from './lista-bancas-routing.module';
import { ListaBancasComponent } from './lista-bancas/lista-bancas.component';


@NgModule({
  declarations: [ListaBancasComponent],
  imports: [
    CommonModule,
    ListaBancasRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class ListaBancasModule { }
