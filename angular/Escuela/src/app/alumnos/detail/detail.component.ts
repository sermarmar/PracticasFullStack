import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/alumnos.service';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  alumno: Alumno;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnosService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.alumnoService.getById(params.alumnoId)
        .then(response => {
          this.alumno = response;
        }).catch(err => {
          console.log(err);
        });
    });
  }

}
