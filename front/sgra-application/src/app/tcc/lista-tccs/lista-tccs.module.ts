import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';




import { ListaTccsRoutingModule } from './lista-tccs-routing.module';
import { ListaTccsComponent } from './lista-tccs/lista-tccs.component';


@NgModule({
  declarations: [ListaTccsComponent],
  imports: [
    CommonModule,
    ListaTccsRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class ListaTccsModule { }
