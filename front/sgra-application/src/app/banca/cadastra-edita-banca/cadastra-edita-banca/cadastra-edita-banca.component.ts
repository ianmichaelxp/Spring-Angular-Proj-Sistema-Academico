import { Professor } from './../../../models/professor.model';
import { Banca } from '../../../models/banca.model';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BancaService } from '../../banca.service';

@Component({
  selector: 'app-cadastra-edita-banca',
  templateUrl: './cadastra-edita-banca.component.html',
  styleUrls: ['./cadastra-edita-banca.component.scss'],
})
export class CadastraEditaBancaComponent implements OnInit {
  formGroup: FormGroup;
  banca: Banca;
  // integrantesBanca: Professor[];
  listaProfessores: Professor[] = [
    {
      id: 1,
      matricula: 123,
      curso: 'Sistemas',
      usuario: 'Usuario',
    },
    {
      id: 2,
      matricula: 234,
      curso: 'Sistemas Dois',
      usuario: 'Usuario Dois',
    },
  ];

  // integrantes = new FormControl();
  constructor(
    private formBuilder: FormBuilder,
    private bancaService: BancaService,
    private router: Router,
    private activatedRoute: ActivatedRoute // public matSnackBar: MatSnackBar // public matDialog: MatDialog,
  ) {}

  //   cronograma: string;
  //   documento: string;
  //   banca: string;

  ngOnInit(): void {
    this.banca = this.activatedRoute.snapshot.data['banca'];
    this.formGroup = this.formBuilder.group({
      id: [this.banca && this.banca.id ? this.banca.id : null],
      integrantes: [this.banca && this.banca.integrantes ? this.banca.integrantes : null, Validators.required],
      data: [
        this.banca && this.banca.data ? this.banca.data : null,
        Validators.required,
      ],
    });
  }

  salvar(): void {
    // console.log(this.formGroup.value);
    if (this.banca && this.banca.id) {
      this.bancaService.atualizar(this.formGroup.value).subscribe(
        (bancaAtualizado) => {
          this.router.navigateByUrl('/tccs');
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      this.bancaService.cadastrar(this.formGroup.value).subscribe(
        (bancaCadastrado) => {
          this.router.navigateByUrl('/tccs');
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
  /*************************VERIFICAR****************************/
  deletar(): void {
    if (confirm(`Deseja deletar a banca de(a) ${this.banca.id}?`)) {
      this.bancaService.deletar(this.banca).subscribe(
        (res) => {
          this.router.navigateByUrl('/tccs');
        },
        (err) => {
          alert(`Erro ao deletar ${JSON.stringify(err)}`);
        }
      );
    }
  }
  /*************************VERIFICAR****************************/
}
