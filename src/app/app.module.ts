import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent} from './blog/blog.component';
import { VenteComponent } from './vente/vente.component';
import { LocationComponent } from './location/location.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PublierAnnonceComponent } from './publier-annonce/publier-annonce.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { AideComponent } from './aide/aide.component';
import { AproposComponent } from './apropos/apropos.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnnonceService } from './services/service-annonce/annonce.service';
=======
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 4f8a9d42ee9dd86e4624616c431dc6ed1db9a475

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VenteComponent,
    LocationComponent,
    ContactUsComponent,
    ConnexionComponent,
    PublierAnnonceComponent,
    FooterComponent,
    HeaderComponent,
    SlideComponent,
    BlogComponent,
    AideComponent,
    AproposComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,
=======
>>>>>>> 4f8a9d42ee9dd86e4624616c431dc6ed1db9a475
    HttpClientModule
  ],
  providers: [AnnonceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
