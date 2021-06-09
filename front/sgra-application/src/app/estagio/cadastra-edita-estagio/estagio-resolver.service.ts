import { Estagio } from './../estagio.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EstagioService } from '../estagio.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstagioResolverService implements Resolve<Estagio>{

  constructor(private estagioService: EstagioService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.params['id'];
    if (id) {
        return this.estagioService.pesquisarPorId(id);
    }
    return of({} as Estagio);
  }
}
