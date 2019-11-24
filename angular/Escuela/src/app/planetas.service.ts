import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private http: HttpClient) { }

  getAll(pPage): Promise<any> {
    /*this.http.get('https://swapi.co/api/planets/?format=json').subscribe(response => {
      console.log(response);
    });*/
    return this.http.get('https://swapi.co/api/planets/?format=json&page=' + pPage).toPromise();
  }
}
