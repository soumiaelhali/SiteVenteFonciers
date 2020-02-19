import { Injectable } from '@angular/core';
import { Compte } from '../compte';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthStore {
    isAuthenticated: boolean = false;

    constructor(
        private authService: AuthService
    ) {
        if(this.authService.isAuthenticated()) {
            this.isAuthenticated = true;
        }
    }
}