import { Estagio } from './../../estagio.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstagioService } from '../../estagio.service';

@Component({
  selector: 'app-cadastra-edita-estagio',
  templateUrl: './cadastra-edita-estagio.component.html',
  styleUrls: ['./cadastra-edita-estagio.component.scss'],
})
export class CadastraEditaEstagioComponent implements OnInit {
  formGroup: FormGroup;
  estagio: Estagio;
  constructor(
    private formBuilder: FormBuilder,
    private estagioService: EstagioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) // public matDialog: MatDialog,
  // public matSnackBar: MatSnackBar
  {}

  ngOnInit(): void {
    this.estagio = this.activatedRoute.snapshot.data['estagio'];
    this.formGroup = this.formBuilder.group({
      id: [this.estagio && this.estagio.id ? this.estagio.id : null],
      estagio: [
        this.estagio && this.estagio.estagio ? this.estagio.estagio : null,
        Validators.required,
      ],
      aluno: [
        this.estagio && this.estagio.aluno ? this.estagio.aluno : null,
        Validators.required,
      ],
      orientador: [
        this.estagio && this.estagio.orientador
          ? this.estagio.orientador
          : null,
        Validators.required,
      ],
      status: [
        this.estagio && this.estagio.status ? this.estagio.status : null,
        Validators.required,
      ],
    });
  }

  salvar(): void {
    if (this.estagio && this.estagio.id) {
      this.estagioService.atualizar(this.formGroup.value).subscribe(
        (estagioAtualizado) => {
          this.router.navigateByUrl('/estagios');
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      this.estagioService.cadastrar(this.formGroup.value).subscribe(
        (estagioCadastrado) => {
          this.router.navigateByUrl('/estagios');
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  deletar(): void {
    if (confirm(`Deseja deletar o estágio de(a) ${this.estagio.aluno}?`)) {
      this.estagioService.deletar(this.estagio).subscribe(
        (res) => {
          this.router.navigateByUrl('/estagios');
        },
        (err) => {
          alert(`Erro ao deletar ${JSON.stringify(err)}`);
        }
      );
    }
  }
}
