import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosLog } from '../models/usuarios';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  logs!: UsuariosLog;

  constructor(
    //private variablesGlobales: GlobalesService,
    //private authService: AuthUserService,
    private cookie: CookieService,
    private router: Router,
    private vd: FormBuilder,
    private miServicio: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.vd.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    })
  }
  //get f(): { [key: string]: AbstractControl} {return this.loginForm.controls; }
  setLogueo(): void {

    this.logs = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
  }
  //FORMULARIO
      /* const miRequest = {
        'email': this.f['email'].value,
        'password': this.f['password'].value
      } */

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

  login() {
    if (this.loginForm.valid) {
      this.setLogueo();
      console.log(this.loginForm.value);

      this.miServicio.login(this.logs).subscribe((data: any) => {
        console.log(data);
        //setItem, es para darle el valor a la variable que esta entre comillas
        localStorage.setItem("token", data.token);

        this.router.navigate(['/home']);

      })
    }
  }
}
