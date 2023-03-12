import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import {NgxGalleryModule} from '@kolkov/ngx-gallery'; // see https://www.npmjs.com/package/@kolkov/ngx-gallery

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './generic/topbar/topbar.component';
import { BannerComponent } from './generic/banner/banner.component';
import { NavbarComponent } from './generic/navbar/navbar.component';
import { FooterComponent } from './generic/footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PlaintesComponent } from './generic/plaintes/plaintes.component';
import { SliderComponent } from './pages/accueil/slider/slider.component';
import { FlashComponent } from './pages/accueil/flash/flash.component';
import { DgComponent } from './pages/accueil/dg/dg.component';
import { CommuniquesComponent } from './pages/accueil/communiques/communiques.component';
import { EspaceQualiteComponent } from './pages/accueil/espace-qualite/espace-qualite.component';
import { ServiceLigneComponent } from './pages/accueil/service-ligne/service-ligne.component';
import { AssistanceComponent } from './pages/accueil/assistance/assistance.component';
import { TransfertProprieteComponent } from './pages/accueil/transfert-propriete/transfert-propriete.component';
import { InfosUtilesComponent } from './pages/accueil/infos-utiles/infos-utiles.component';
import { ActivitesInternesComponent } from './pages/accueil/activites-internes/activites-internes.component';
import { CarteComponent } from './pages/accueil/carte/carte.component';
import { EspacePubComponent } from './pages/accueil/espace-pub/espace-pub.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    ContactComponent,
    PlaintesComponent,
    SliderComponent,
    FlashComponent,
    DgComponent,
    CommuniquesComponent,
    EspaceQualiteComponent,
    ServiceLigneComponent,
    AssistanceComponent,
    TransfertProprieteComponent,
    InfosUtilesComponent,
    ActivitesInternesComponent,
    CarteComponent,
    EspacePubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
