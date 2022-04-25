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
    let headers = new HttpHeaders().set('Authorization', 'bearer ' + 'NjY.E5fCA4pCjM2X-ojNL13vNo0Ld7OUPakJqfo5cO0Cov0btxgwubVFLTaQ9lgB')
    const url = `${this.apiURL}api/v1/indexExtendido`;
    return this.http.get<any>(url, { headers });
  }
}
