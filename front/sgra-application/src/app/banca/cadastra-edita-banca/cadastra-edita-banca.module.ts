import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




import { CadastraEditaBancaRoutingModule } from './cadastra-edita-banca-routing.module';
import { CadastraEditaBancaComponent } from './cadastra-edita-banca/cadastra-edita-banca.component';


@NgModule({
  declarations: [CadastraEditaBancaComponent],
  imports: [
    CommonModule,
    CadastraEditaBancaRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,

  ]
})
export class CadastraEditaBancaModule { }
