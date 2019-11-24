import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alumno } from './models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/students';
  }

  getAll(): Promise<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseUrl, this.createHttpOptions()).toPromise();
  }

  getById(alumnoId): Promise<Alumno> {
    return this.http.get<Alumno>(`${this.baseUrl}/${alumnoId}`, this.createHttpOptions()).toPromise();
  }

  create(values): Promise<Alumno> {
    return this.http.post<Alumno>(this.baseUrl, values, this.createHttpOptions()).toPromise();
  }

  delete(pAlumnoId) {
    return this.http.delete(`${this.baseUrl}/${pAlumnoId}`, this.createHttpOptions()).toPromise();
  }



  createHttpOptions() {
    return {
      headers: new HttpHeaders({
        'aepi-token': localStorage.getItem('tokenEscuelas')
      })
    };
  }

}
