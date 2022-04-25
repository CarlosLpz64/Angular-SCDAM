import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosRegis } from '../models/usuarios';
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
    //private variablesGlobales: GlobalesService,
    //private authService: AuthUserService,
    private cookie: CookieService,
    private router: Router,
    private miServicio: UsuariosService,
    private vd: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.FormControl = this.vd.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      /* apellido:["",[Validators.required,Validators.minLength(3)]],
       telefono:["",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]], */
      rol_id: ["2", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      // passwordConfirmation: ["", [Validators.required, Validators.minLength(8)]]
      /*cargo:["",[Validators.required]]*/
    })
  }
  setUsuario(): void {
    this.user = {
      username: this.FormControl.get('username')?.value,
      rol_id: this.FormControl.get('rol_id')?.value,
      email: this.FormControl.get('email')?.value,
      password: this.FormControl.get('password')?.value,
      //passwordConfirmation:this.FormControl.get('passwordConfirmation')?.value,
      //cargo:this.FormControl.get('cargo')?.value
    }

  }
  registrar(): void {

    this.setUsuario();
    console.log(this.FormControl.value);
    this.miServicio.registrarUsuario(this.user).subscribe((data: any) => {
      console.log("ya jala");
      localStorage.setItem("token",data.token);
    },
      error => {
        console.log(error);
      })
  }


  /* loginForm = new FormGroup({
    username: new registerForm('',[Validators.required,Validators.minLength(3)]),
    email : new registerForm('', [Validators.required, Validators.email]),
    password : new registerForm('', [Validators.required]),
    passwordConfirmation : new registerForm('',[Validators.required]),
  }); */

  //get f(): { [key: string]: AbstractControl} {return this.loginForm.controls; }

/*   registrar(): void {

  } */

  login() {
    return true
  }

}
