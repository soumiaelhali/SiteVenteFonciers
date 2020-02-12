import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/service-annonce/annonce.service';
import { annonce } from '../model/annonce';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
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
