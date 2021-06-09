import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'estagios',
    loadChildren: () => import('./estagio/lista-estagios/lista-estagios.module').then(modulo => modulo.ListaEstagiosModule)
  },
  {
    path: 'estagios/cadastrar',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./estagio/cadastra-edita-estagio/cadastra-edita-estagio.module').then(modulo => modulo.CadastraEditaEstagioModule)
  },
  {
    path: 'estagios/editar/:id',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./estagio/cadastra-edita-estagio/cadastra-edita-estagio.module').then(modulo => modulo.CadastraEditaEstagioModule)
  },
  {
    path: 'tccs',
    loadChildren: () => import('./tcc/lista-tccs/lista-tccs.module').then(modulo => modulo.ListaTccsModule)
  },
  {
    path: 'tccs/cadastrar',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./tcc/cadastra-edita-tcc/cadastra-edita-tcc.module').then(modulo => modulo.CadastraEditaTccModule)
  },
  {
    path: 'tccs/editar/:id',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./tcc/cadastra-edita-tcc/cadastra-edita-tcc.module').then(modulo => modulo.CadastraEditaTccModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
