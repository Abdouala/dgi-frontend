import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  /* {path:'', component:AccueilComponent}, */
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent},
  {path:'galerie', component:GalleryComponent},
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "top" }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
