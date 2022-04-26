import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { VarGlobalesService } from '../services/var-globales.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private variablesGlobales: VarGlobalesService, 
    private cookie: CookieService,
    private router: Router
    ) { }

    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const rol = this.cookie.get("Rol")

      if (rol == '1'){
        this.variablesGlobales.isAdmin = true;
      }else{
        this.variablesGlobales.isAdmin = false;
        this.router.navigate(['/home'])
      }

    return this.variablesGlobales.isAdmin;
  }
  
}
