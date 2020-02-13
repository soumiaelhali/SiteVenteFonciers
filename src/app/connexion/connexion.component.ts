import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import { Compte } from '../compte';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  private compte: Compte = {
    FirstName: '',   
    LastName: '',
    email: '', 
    password:''
};
comptes: Compte[] = [];

  constructor(private service: CompteService, private router: Router) { }
  add() {
    this.service.addCompte(this.compte).subscribe((compte) => this.comptes = [compte, ...this.comptes]);
  }

  onSubmit() {
    if (this.service.form) {
      this.compte = this.service.form.value; 
      console.log(this.compte);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.router.navigate(['/home']);

    }else{
      let cmp:Compte;
      cmp = this.service.form.value;
      this.compte ={
        id: cmp.id,
        FirstName: cmp.FirstName,
        LastName: cmp.LastName, 
        email: cmp.email,
        password:cmp.password
      };
    }
  }
  goAuthentification(){
    this.router.navigate(['']);
  }

  

  ngOnInit() {
  }

}
