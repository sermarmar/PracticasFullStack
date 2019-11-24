import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './alumnos/lista/lista.component';
import { FormComponent } from './alumnos/form/form.component';
import { EditComponent } from './alumnos/edit/edit.component';
import { DetailComponent } from './alumnos/detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
  { path: 'alumnos', component: ListaComponent, canActivate: [LoginGuard] },
  { path: 'alumnos/new', component: FormComponent },
  { path: 'alumnos/edit/:alumnoId', component: EditComponent },
  { path: 'alumnos/:alumnoId', component: DetailComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pipes', component: PipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
