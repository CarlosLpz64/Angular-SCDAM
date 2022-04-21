import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
    return true
  }

}
