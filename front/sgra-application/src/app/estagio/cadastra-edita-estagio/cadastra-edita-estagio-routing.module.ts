import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraEditaEstagioComponent } from './cadastra-edita-estagio/cadastra-edita-estagio.component';

const routes: Routes = [
  {
    path: '', component: CadastraEditaEstagioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastraEditaEstagioRoutingModule { }
