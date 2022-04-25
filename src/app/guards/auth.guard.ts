import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VarGlobalesService } from '../services/var-globales.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public variablesGlobales: VarGlobalesService,
    private authService: UsuariosService
  ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.variablesGlobales.isLoading = true;

    this.authService.miPerfil().subscribe({
      next: (r:any) => [],
      error: (e) => [console.error(e), this.variablesGlobales.setIsLogged(false), this.variablesGlobales.isLoading = false],
      complete: () => [console.info('complete'), this.variablesGlobales.setIsLogged(true), this.variablesGlobales.isLoading =false]
    })

    return true;
  }
  
}
