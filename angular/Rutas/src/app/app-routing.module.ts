import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { InfoComponent } from './info/info.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductComponent } from './product/product.component';
import { RelatedComponent } from './related/related.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/info' },
  { path: 'saludo/:mensaje', component: SaludoComponent },
  { path: 'info', component: InfoComponent, canActivate: [LoginGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [LoginGuard] },
  {
    path: 'product/:productId', component: ProductComponent, children: [
      { path: 'related', component: RelatedComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: '**', component: SaludoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
