import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:3000/articles";
  private users_access = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
  getArticle(id) {
    return this.httpClient.get(`${this.REST_API_SERVER }/${id}`)
  }
  getCompte(id) {
    return this.httpClient.get(`${this.users_access }/${id}`)
  }
}
