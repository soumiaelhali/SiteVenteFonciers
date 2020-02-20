import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import { AuthStore } from '../store/auth.store';
import { AuthService } from '../services/auth/auth.service';
import * as $ from '../../assets/js/jquery.min.js';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private compte: Compte = {
    FirstName: '',   
    LastName: '',
    email: '', 
    password:''};

    comptes: Compte[] = [];
    alertStatus: any = {
      enabled: false,
      class: 'success',
      message: ''
    };
  
    private user: any = {email: '', password: ''};

    constructor(
      private service: CompteService, 
      private router: Router,
      private authService: AuthService,
      private authStore: AuthStore
    ) { }
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
        this.alertStatus = {
          enabled: true,
          class: 'alert-success',
          message: 'vous etes inscris avec succes '
        }  
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

    closeAlert() {
      this.alertStatus = {
        enabled: false,
        class: 'alert-success',
        message: ''
      } 
    }

    login() {
      let credentials = {email: this.user.email, password: this.user.password};
      this.authService.login(credentials)
        .subscribe(response => {
          if(response && response.length > 0) {
            this.authService.setAuth(response[0]);
            this.authStore.isAuthenticated = true;
            $('#btn-close-modal').click();
          } else {
            this.alertStatus = {
              enabled: true,
              class: 'alert-danger',
              message: 'Donnees incorrect !!'
            }  
          }
        });
    }
  
    
  
    ngOnInit() {
    }
    
}
