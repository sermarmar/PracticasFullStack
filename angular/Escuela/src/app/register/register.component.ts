import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService) {
    this.formulario = new FormGroup({
      mail: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.usuariosService.registro(this.formulario.value)
      .then(response => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      });

    //const response = await this.usuariosService.registro(this.formulario.value);
  }

}
