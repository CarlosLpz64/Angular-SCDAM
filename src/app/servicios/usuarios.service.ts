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

  login(data:UsuariosLog):Observable<any>{
    return this.http.post(`${this.apiURL}auth/v1/login`,data);
  }

  logout():Observable<any>{
    return this.http.get(`${this.apiURL}auth/v1/logout`);
  }

  mostrarUsuarios():Observable<any>{
    return this.http.get<any>(`${this.apiURL}auth/v1/users/`);
  }

  miPerfil():Observable<any>{
    return this.http.get<any>(`${this.apiURL}auth/v1/userData/`);
  }

  eliminarUsuarios(id: number):Observable<any>{
    return this.http.delete<any>(`${this.apiURL}auth/v1/user/`+id)
  }

  actualizarUsuarios(id: number, data: any):Observable<any>{
    return this.http.put<any>(`${this.apiURL}auth/v1/user/`+id, data)
  }

}
