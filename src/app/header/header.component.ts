import { Component, OnInit } from '@angular/core';
import { AuthStore } from '../store/auth.store';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authStore: AuthStore,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  disconnect() {
    this.authService.disconnect();
    this.authStore.isAuthenticated = false;
  }
}
