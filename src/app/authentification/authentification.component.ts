import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  //private compte: Compte = {
   // email: '',
    //password: ''
//};
//comptes: Compte[] = [];

  constructor(/*private service: CompteService, private router: Router*/) { }

  ngOnInit() {
  }

}
