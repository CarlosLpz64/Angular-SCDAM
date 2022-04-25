import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuarios, UsuariosLog, UsuariosRegis } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiURL= environment.apiURL;

  constructor( private http:HttpClient) { }

  registrarUsuario(us:UsuariosRegis):Observable<any>{
      return this.http.post(`${this.apiURL}auth/v1/register`,us);
  }
  login(lo:UsuariosLog):Observable<any>{
    return this.http.post(`${this.apiURL}auth/v1/login`,lo);
  }

  mostrarUsuarios():Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + 'NjY.E5fCA4pCjM2X-ojNL13vNo0Ld7OUPakJqfo5cO0Cov0btxgwubVFLTaQ9lgB')
    const url = `${this.apiURL}auth/v1/users/`;
    return this.http.get<any>(url,{headers});
}

}
