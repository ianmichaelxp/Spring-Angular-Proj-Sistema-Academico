import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




import { CadastraEditaTccRoutingModule } from './cadastra-edita-tcc-routing.module';
import { CadastraEditaTccComponent } from './cadastra-edita-tcc/cadastra-edita-tcc.component';


@NgModule({
  declarations: [CadastraEditaTccComponent],
  imports: [
    CommonModule,
    CadastraEditaTccRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,

  ]
})
export class CadastraEditaTccModule { }
