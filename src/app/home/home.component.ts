import { Component, OnInit } from "@angular/core";
import { AnnonceService } from "../services/service-annonce/annonce.service";
import { annonce } from "../model/annonce";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  resp: annonce[];

  constructor(private service: AnnonceService, private rout: Router) {}

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.getAll().subscribe(res => {
      if (!res) {
        return;
      }
      console.log(res);
      this.resp = res as annonce[];
    });
  }

  getDetaill(id) {
    this.service.populatedetail(id);
    this.rout.navigateByUrl("/detail");
  }
}
