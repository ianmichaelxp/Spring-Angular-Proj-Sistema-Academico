import { Tcc } from '../../tcc.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TccService } from '../../tcc.service';

@Component({
  selector: 'app-cadastra-edita-tcc',
  templateUrl: './cadastra-edita-tcc.component.html',
  styleUrls: ['./cadastra-edita-tcc.component.scss'],
})
export class CadastraEditaTccComponent implements OnInit {
  formGroup: FormGroup;
  tcc: Tcc;
  constructor(
    private formBuilder: FormBuilder,
    private tccService: TccService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) // public matDialog: MatDialog,
  // public matSnackBar: MatSnackBar
  {}

  //   cronograma: string;
  //   documento: string;
  //   banca: string;

  ngOnInit(): void {
    this.tcc = this.activatedRoute.snapshot.data['tcc'];
    this.formGroup = this.formBuilder.group({
      id: [this.tcc && this.tcc.id ? this.tcc.id : null],
      titulo: [
        this.tcc && this.tcc.titulo ? this.tcc.titulo : null,
        Validators.required,
      ],
      cronograma: [
        this.tcc && this.tcc.cronograma ? this.tcc.cronograma : null,
        Validators.required,
      ],
      documento: [
        this.tcc && this.tcc.documento ? this.tcc.documento : null,
        Validators.required,
      ],
      banca: [
        this.tcc && this.tcc.banca ? this.tcc.banca : null,
        Validators.required,
      ],
    });
  }

  salvar(): void {
    if (this.tcc && this.tcc.id) {
      this.tccService.atualizar(this.formGroup.value).subscribe(
        (tccAtualizado) => {
          this.router.navigateByUrl('/Tccs');
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      this.tccService.cadastrar(this.formGroup.value).subscribe(
        (TccCadastrado) => {
          this.router.navigateByUrl('/tccs');
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  deletar(): void {
    if (confirm(`Deseja deletar o estágio de(a) ${this.tcc.titulo}?`)) {
      this.tccService.deletar(this.tcc).subscribe(
        (res) => {
          this.router.navigateByUrl('/tccs');
        },
        (err) => {
          alert(`Erro ao deletar ${JSON.stringify(err)}`);
        }
      );
    }
  }
}
