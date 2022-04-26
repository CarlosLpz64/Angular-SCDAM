import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  index(): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}api/v1/sensores`);
  }

  altaSensor(data:any):Observable<any>{
    return this.http.post(`${environment.apiURL}api/v1/sensores`,data)
  }
}
