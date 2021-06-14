import { Banca } from '../../models/banca.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BancaService } from '../banca.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BancaResolverService implements Resolve<Banca>{

  constructor(private bancaService: BancaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.params['id'];
    if (id) {
        return this.bancaService.pesquisarPorId(id);
    }
    return of({} as Banca);
  }
}
