import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input()
  numero: number;
  @Output()
  cuentaTerminada: EventEmitter<string>;

  constructor() {
    this.numero = 10;
    this.cuentaTerminada = new EventEmitter();
  }

  ngOnInit() {
  }

  arrancarContador() {
    let interval = setInterval(() => {
      this.numero--;
      if (this.numero === 0) {
        clearInterval(interval);
        this.cuentaTerminada.emit('Se ha terminado de contar...');
      }
    }, 1000);
  }

}
