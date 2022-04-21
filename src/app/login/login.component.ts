import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    //private variablesGlobales: GlobalesService,
    //private authService: AuthUserService,
    private cookie: CookieService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
  });

  get f(): { [key: string]: AbstractControl} {return this.loginForm.controls; }

  login(){
    if (this.loginForm.valid){

      //FORMULARIO
      const miRequest = {
        'email':this.f['email'].value, 
        'password':this.f['password'].value 
      }

      /*
      this.variablesGlobales.isLoading = true;

      this.authService.login(miRequest).subscribe({
        next: (r) => [
        this.cookie.set("Token", r.token),
        //this.cookie.set("ID", "aquí va la id"),  
        this.variablesGlobales.setIsLogged(true)
      ],
        error: (e) => [console.error(e), this.variablesGlobales.isLoading = false],
        complete: () => [console.info('complete'), 
        this.variablesGlobales.isLoading = false,
        this.router.navigate(['/home'])]
    })
    */
    this.router.navigate(['/home']);
    }
    
  }

}
