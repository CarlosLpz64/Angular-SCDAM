import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosLog } from '../models/usuarios';
import { VarGlobalesService } from '../services/var-globales.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  respuesta: any;
  esAdmin: boolean = false;

  constructor(
    private miService:UsuariosService,
    private variablesGlobales: VarGlobalesService, 
    private cookie: CookieService, 
    private router: Router) { }

  ngOnInit(): void {

  }


  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  get f(): { [key: string]: AbstractControl} {return this.loginForm.controls; }

  login(){
    if (this.loginForm.valid){
      const miRequest = {
        'email':this.f['email'].value, 
        'password':this.f['password'].value 
      }
      this.variablesGlobales.isLoading = true;
      console.log(miRequest);

      this.miService.login(miRequest).subscribe({
        next: (r) => [
        console.log("Respuesta: " + r),
        this.cookie.set("Token", r.token.token),
        this.cookie.set("Rol", r.dataUser.rol_id),
        this.variablesGlobales.setIsLogged(true),
        this.setRol(r.dataUser.rol_id),
        this.router.navigate(['/home'])
      ],
        error: (e) => [console.error(e), this.variablesGlobales.isLoading = false],
        complete: () => [console.info('complete'), this.variablesGlobales.isLoading = false]
    })
    }
  }

  setRol(rol: string){
    if (rol == '1'){
      this.variablesGlobales.isAdmin = true;
    }else{
      this.variablesGlobales.isAdmin = false;
    }
  }


  //COOKIES
  //SET: this.cookie.set("nombre", "valor")
  //GET: this.cookie.get("nombre")

}
