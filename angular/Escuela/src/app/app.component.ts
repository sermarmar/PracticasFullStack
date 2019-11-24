import { Component, OnInit } from '@angular/core';
import { PlanetasService } from './planetas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  arrPlanetas: any[];
  numPage: number;
  pageCount: number;

  constructor(private planetasService: PlanetasService) {
    this.title = 'Hola Mundo';
    this.numPage = 1;
    this.pageCount = 0;
  }

  ngOnInit() {
    /*this.planetasService.getAll(this.numPage)
      .then(response => {
        this.arrPlanetas = response.results;
      }).catch(err => {
        console.log(err);
      });*/

    this.getPlanets();
  }

  cambioPagina(pSiguiente) {
    if (pSiguiente) {
      this.numPage++;
    }
    else {
      this.numPage--;
    }
    this.getPlanets();
    /*this.planetasService.getAll(this.numPage)
      .then(response => {
        this.arrPlanetas = response.results;
      }).catch(err => {
        console.log(err);
      });*/
  }

  getPlanets() {
    this.planetasService.getAll(this.numPage)
      .then(response => {
        this.arrPlanetas = response.results;
        this.pageCount = Math.ceil(response.count / 10);
        console.log(this.pageCount);
      }).catch(err => {
        console.log(err);
      });
  }

}
