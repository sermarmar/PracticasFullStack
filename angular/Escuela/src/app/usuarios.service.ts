import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users/'//'http://aepi.ngrok.io/api/users/'
  }

  registro(values) {
    return this.http.post(this.baseUrl + 'register', values).toPromise();
  }

  login(values) {
    return this.http.post(this.baseUrl + '/login', values).toPromise();
  }
}
