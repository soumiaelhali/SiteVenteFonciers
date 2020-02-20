import { Component, OnInit } from "@angular/core";
import { AnnonceService } from "../services/service-annonce/annonce.service";
import { Router } from "@angular/router";
import { annonce } from "../model/annonce";

@Component({
  selector: "app-details-annonce",
  templateUrl: "./details-annonce.component.html",
  styleUrls: ["./details-annonce.component.css"]
})
export class DetailsAnnonceComponent implements OnInit {
  anon: annonce;

  constructor(private service: AnnonceService, private rout: Router) {}

  ngOnInit() {
    this.service.getAnonce().subscribe(annonce => {
      this.anon = annonce;
      console.log(this.anon);
    });
  }
}
