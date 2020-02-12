import { Component, OnInit } from '@angular/core';
import { annonce } from '../model/annonce';
import { AnnonceService } from '../services/service-annonce/annonce.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  resp : annonce[];
  constructor(private service : AnnonceService ) { }

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
}

