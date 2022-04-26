import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  
  apiURL = environment.apiURL;

  constructor(private http:HttpClient) { }

  mostrarRegistros(): Observable<any> {
    const url = `${this.apiURL}api/v1/indexExtendido`;
    return this.http.get<any>(url);
  }

  mostrarRegistroSensor(id:string): Observable<any> {
    const url = `${this.apiURL}api/v1/configuracion/${id}`;
    return this.http.get<any>(url);
  }
}
