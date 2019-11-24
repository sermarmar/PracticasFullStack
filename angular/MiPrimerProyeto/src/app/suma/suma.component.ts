import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input()
  num1: number;
  @Input()
  num2: number;

  @Output()
  sumaTerminada: EventEmitter<string>;

  resultado: number;


  constructor() {
    this.sumaTerminada = new EventEmitter();
  }

  ngOnInit() {
  }

  realizarSuma() {
    this.resultado = this.num1 + this.num2;
    console.log(this.resultado);
    this.sumaTerminada.emit(`La suma de ${this.num1} y ${this.num2} es igual a ${this.resultado}`);
  }

}
