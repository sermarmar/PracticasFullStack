import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrAlumnos: any[];

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.cargarAlunmnos();
  }

  cargarAlunmnos() {
    this.alumnoService.getAll()
      .then(response => {
        console.log(response);
        this.arrAlumnos = response;
      }).catch(err => {
        console.log(err);
      });
  }

  manejarClickVer(alumno) {
    this.router.navigate(['/alumnos', alumno._id]);
  }

  manejarClickBorrar(alumno) {
    this.alumnoService.delete(alumno._id)
      .then(response => {
        if (response['success']) {
          alert('Alumno borrado');
          this.cargarAlunmnos();
        }
      }).catch(err => console.log(err));
  }

}
