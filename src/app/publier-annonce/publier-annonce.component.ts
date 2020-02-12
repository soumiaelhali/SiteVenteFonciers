import { Component, OnInit } from '@angular/core';
import { annonce } from '../model/annonce';
import { AnnonceService } from '../services/service-annonce/annonce.service';
import { VenteComponent } from '../vente/vente.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publier-annonce',
  templateUrl: './publier-annonce.component.html',
  styleUrls: ['./publier-annonce.component.css']
})
export class PublierAnnonceComponent implements OnInit {

  private anno: annonce = {
    title: '',
    email: '',
    surface: null,
    image_url: '',
    adresse: '',
    detail: '',
    prix: null,
    date: null,
    etat: false,
    alouer:false,
    nom_vendeur:'',
    email_vendeur:'',
    tel_vendeur:''
  };
  anns :annonce[] = [];

  constructor(private service:AnnonceService, private router:Router) { }

  ngOnInit() {
    this.service.findAll();
  }


  add(){
    this.service.add(this.anno)
    .subscribe((anno)=>{
      this.anns = [anno, ...this.anns];
    });
  }

 onSubmit()
 {
  if(this.service.form.valid){
    this.anno = this.service.form.value;
    
    if(this.service.form.value.id==null){
      console.log(this.anno);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
      alert("lannoonce a ete ajoute avec succes");

    }
  }
}
}
