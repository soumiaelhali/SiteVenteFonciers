import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from 'src/app/compte';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any[]> {
    return this.http.get<any[]>(this.url + '?email=' + credentials.email + '&password=' + credentials.password + '&_limit=1');
  }

  setAuth(user) {
    localStorage.setItem('auth', JSON.stringify(user));
  }

  disconnect() {
    localStorage.removeItem('auth');
  }

  getAuthUser(): Compte {
    let user: Compte = JSON.parse(localStorage.getItem('auth'))
    return user;
  }

  isAuthenticated() {
    return this.getAuthUser() ? true : false;
  }
}
