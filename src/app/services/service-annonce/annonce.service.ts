import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators}from"@angular/forms";
import { HttpClient } from '@angular/common/http';
import { annonce } from '../../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:3000/annonces"

  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('',Validators.required),
    nom: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    telephone: new FormControl('',[Validators.required,Validators.minLength(8)]),
    surface: new FormControl(0),
    choix: new FormControl(false),
    adresse: new FormControl(''),
    detail: new FormControl(''),
    image_url: new FormControl(''),
    prix: new FormControl(0),
    etat: new FormControl(false),
    date: new FormControl(Date.now())
  
  });
    

  initializeFormGroup(){
    this.form.setValue({
      title: '',
      email: '',
      surface: '',
      image_url: '',
      adresse: '',
      detail: '',
      prix: '',
      date: Date.now(),
      etat: false,
      alouer:false,
      nom_vendeur:'',
      email_vendeur:'',
      tel_vendeur:''
    });
  }
  findAll(){
    return this.http.get<annonce[]>(this.url);
  }
  add(annonce){
    return this.http.post<annonce>(this.url, annonce);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  update(annonce){
    return this.http.put(`${this.url}/${annonce.id}`, annonce);
  }

  populateform(row){
    this.form.setValue(row);
  }


}
