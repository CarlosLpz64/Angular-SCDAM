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

  registrarZona(data:AgregarZona):Observable<any>{
    return this.http.post(`${this.apiURL}api/v1/zone`,data)
  }

  mostrarZonas(): Observable<any> {
    const url = `${this.apiURL}api/v1/zone`;
    return this.http.get<any>(url);
  }
  
}
