import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/service-annonce/annonce.service';
import { annonce } from '../model/annonce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 resp : annonce[];

  constructor( private service: AnnonceService) { }


  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.resp = res as annonce[];  
    });
  }
  detaill(id){
    console.log(id);
  }

}
