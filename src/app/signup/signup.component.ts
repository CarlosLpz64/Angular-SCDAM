import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosRegis } from '../models/usuarios';
import { VarGlobalesService } from '../services/var-globales.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  FormControl!: FormGroup;
  user!: UsuariosRegis;
  constructor(
    private variablesGlobales: VarGlobalesService,
    private cookie: CookieService,
    private router: Router,
    private miServicio: UsuariosService,
    private vd: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.FormControl = this.vd.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      rol_id: ["2", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    })
  }
  setUsuario(): void {
    this.user = {
      username: this.FormControl.get('username')?.value,
      rol_id: this.FormControl.get('rol_id')?.value,
      email: this.FormControl.get('email')?.value,
      password: this.FormControl.get('password')?.value,
    }

  }
  registrar(): void {

    if (this.FormControl.valid){

      this.setUsuario();

      this.variablesGlobales.isLoading = true;

      this.miServicio.registrarUsuario(this.user).subscribe({
          next: (r) => [
          console.log("Respuesta: " + r),
          this.cookie.set("Token", r.token.token),
          this.variablesGlobales.setIsLogged(true),
          this.variablesGlobales.isAdmin = false,
          this.cookie.set("Rol", '2'),
          this.router.navigate(['/home'])
        ],
          error: (e) => [console.error(e), this.variablesGlobales.isLoading = false],
          complete: () => [console.info('complete'), this.variablesGlobales.isLoading = false]
      })
    }
  }


}
