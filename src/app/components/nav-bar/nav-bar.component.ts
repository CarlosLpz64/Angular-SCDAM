import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //isLogged:boolean = false;

  constructor(
    //private curpService:CurpService,
    //public variablesGlobales: GlobalesService,
    private cookie: CookieService,
    private router: Router) { }

  ngOnInit(): void {
    //this.isLogged = this.variablesGlobales.getIsLooged();
  }

  logout(){
    /*
    this.curpService.isLoading = true;
    console.log("Cerrando sesión...");
    this.curpService.logout().subscribe({
      next: (r) => [
        console.log("Sesión cerrada"),
        this.cookie.set("Token", ""),
        this.variablesGlobales.setIsLogged(false)
        ],
      error: (e) => [console.error(e), this.curpService.isLoading = false],
      complete: () => [console.info('complete'), this.curpService.isLoading = false ]
    })
    */
    this.router.navigate(['/login']);
  }

}
