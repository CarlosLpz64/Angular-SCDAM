import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AgregarZona } from '../models/zonas';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  registrarZona(az:AgregarZona):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + 'NjY.E5fCA4pCjM2X-ojNL13vNo0Ld7OUPakJqfo5cO0Cov0btxgwubVFLTaQ9lgB'/* localStorage.getItem('token') */)
    return this.http.post(`${this.apiURL}api/v1/zone`,az,{headers})
  }

  mostrarZonas(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'bearer ' + 'NjY.E5fCA4pCjM2X-ojNL13vNo0Ld7OUPakJqfo5cO0Cov0btxgwubVFLTaQ9lgB')
    const url = `${this.apiURL}api/v1/zone`;
    return this.http.get<any>(url, { headers });
  }
  /* registrarZonas(): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', 'bearer ' + 'NjY.E5fCA4pCjM2X-ojNL13vNo0Ld7OUPakJqfo5cO0Cov0btxgwubVFLTaQ9lgB')
    const url = `${this.apiURL}api/v1/zone`;
    return this.http.get<any>(url, { headers });
  } */
  
}
