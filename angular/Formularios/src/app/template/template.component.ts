import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('btnFinal', { static: false })
  botonFinal: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(values) {
    console.log(values);
  }

}
