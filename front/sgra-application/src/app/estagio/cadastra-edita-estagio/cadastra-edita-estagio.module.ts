import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




import { CadastraEditaEstagioRoutingModule } from './cadastra-edita-estagio-routing.module';
import { CadastraEditaEstagioComponent } from './cadastra-edita-estagio/cadastra-edita-estagio.component';


@NgModule({
  declarations: [CadastraEditaEstagioComponent],
  imports: [
    CommonModule,
    CadastraEditaEstagioRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,

  ]
})
export class CadastraEditaEstagioModule { }
