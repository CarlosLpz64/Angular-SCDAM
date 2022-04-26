import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  
  apiURL = environment.apiURL;

  constructor(private http:HttpClient) { }

  mostrarRoles(): Observable<any> {
    const url = `${this.apiURL}api/v1/roles`;
    return this.http.get<any>(url);
  }
}