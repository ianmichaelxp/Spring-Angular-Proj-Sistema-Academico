import { BancaResolverService } from './banca-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraEditaBancaComponent } from './cadastra-edita-banca/cadastra-edita-banca.component';

const routes: Routes = [
  {
    path: '',
    component: CadastraEditaBancaComponent,
    resolve: {
      banca: BancaResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastraEditaBancaRoutingModule {}
