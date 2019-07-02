import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.Api.url + ':' + environment.Api.port;

  constructor(private http: HttpClient) { }

  getunit1(): Observable<any> {
    return this.http.get<any>( this.url + '/unit1');
  }

  getunit2(): Observable<any> {
    return this.http.get<any>( this.url + '/unit2');
  }

  getunit3(): Observable<any> {
    return this.http.get<any>( this.url + '/unit3');
  }

  getunit4(): Observable<any> {
    return this.http.get<any>( this.url + '/unit4');
  }

  getunit5(): Observable<any> {
    return this.http.get<any>( this.url + '/unit5');
  }

  getidunit(idAutomate: any, unit: any): Observable<any> {
    return this.http.get<any>( this.url + '/unit' + unit + '/' + idAutomate);
  }
}
