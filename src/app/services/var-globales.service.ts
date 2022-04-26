import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VarGlobalesService {

  isLogged: boolean = false;
  isLoading: boolean = false;
  isAdmin: boolean = false;

  constructor(private router: Router) { }

  setIsLogged(data: boolean){
    this.isLogged = data;

    if (!data){
      this.router.navigate(['/login'])
    }
  }
}
