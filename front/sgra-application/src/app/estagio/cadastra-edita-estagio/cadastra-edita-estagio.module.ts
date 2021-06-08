import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastraEditaEstagioRoutingModule } from './cadastra-edita-estagio-routing.module';
import { CadastraEditaEstagioComponent } from './cadastra-edita-estagio/cadastra-edita-estagio.component';


@NgModule({
  declarations: [CadastraEditaEstagioComponent],
  imports: [
    CommonModule,
    CadastraEditaEstagioRoutingModule
  ]
})
export class CadastraEditaEstagioModule { }
