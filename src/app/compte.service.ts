import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Compte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private Url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }
  addCompte(compte) {
    return this.http.post<Compte>(this.Url, compte);
  }
  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      FirstName: '',
      LastName: '',
      email: '',
      password:''
    });
  }
}
