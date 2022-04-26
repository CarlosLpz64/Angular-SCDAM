import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { VarGlobalesService } from 'src/app/services/var-globales.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //isLogged:boolean = false;

  constructor(
    public variablesGlobales: VarGlobalesService,
    private miService:UsuariosService,
    private cookie: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    //this.isLogged = this.variablesGlobales.getIsLooged();
  }

  logout(){
    
    this.variablesGlobales.isLoading = true;
    console.log("Cerrando sesión...");
    this.miService.logout().subscribe({
      next: (r) => [
        console.log("Sesión cerrada"),
        this.cookie.set("Token", ""),
        this.variablesGlobales.setIsLogged(false),
        this.variablesGlobales.isAdmin = false,
        this.cookie.set("Rol", '0'),
        this.router.navigate(['/login'])
        ],
      error: (e) => [console.error(e), this.variablesGlobales.isLoading = false],
      complete: () => [console.info('complete'), this.variablesGlobales.isLoading = false ]
    })
        
  }

}
