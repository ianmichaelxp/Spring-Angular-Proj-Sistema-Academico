import { TccResolverService } from './tcc-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraEditaTccComponent } from './cadastra-edita-tcc/cadastra-edita-tcc.component';

const routes: Routes = [
  {
    path: '',
    component: CadastraEditaTccComponent,
    resolve: {
      tcc: TccResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraEditaTccRoutingModule {}
