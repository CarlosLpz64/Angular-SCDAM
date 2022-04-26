import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PinesService {

  constructor(private http: HttpClient) { }

  index(): Observable<any> {
    const url = `${environment.apiURL}api/v1/arduinoPorts`;
    return this.http.get<any>(url);
  }

}
