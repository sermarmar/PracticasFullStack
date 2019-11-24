import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  loading: boolean;
  escritores: Escritor[];

  constructor(private escritoresService: EscritoresService) {
    this.loading = true;
  }

  async ngOnInit() {
    //const arrEsc = this.escritoresService.getAll();
    //console.log(arrEsc);

    //Lanzo el loading
    /*this.escritoresService.getAllP()
      .then((arrEscritores) => {
        //Paro el loading
        this.escritores = arrEscritores;
      }).finally(() => {
        this.loading = false;
      });*/

    this.escritores = await this.escritoresService.getAllP();
    this.loading = false;
  }

}
