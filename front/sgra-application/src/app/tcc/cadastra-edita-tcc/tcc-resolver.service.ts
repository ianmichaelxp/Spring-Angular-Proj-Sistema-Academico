import { Tcc } from '../../models/tcc.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TccService } from '../tcc.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TccResolverService implements Resolve<Tcc>{

  constructor(private tccService: TccService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.params['id'];
    if (id) {
        return this.tccService.pesquisarPorId(id);
    }
    return of({} as Tcc);
  }
}
