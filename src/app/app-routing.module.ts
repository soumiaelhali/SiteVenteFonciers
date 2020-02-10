import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { VenteComponent } from './vente/vente.component';
import { LocationComponent } from './location/location.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PublierAnnonceComponent } from './publier-annonce/publier-annonce.component';
import { ConnexionComponent } from './connexion/connexion.component';


const routes: Routes = [
  {path :'blog', component: BlogComponent},
  {path : 'home', component: HomeComponent},
  {path : 'achat' , component : VenteComponent},
  {path : 'location' , component : LocationComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {path : 'publierannonce', component: PublierAnnonceComponent},
  {path : 'connexion' , component : ConnexionComponent},
  {path : '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
