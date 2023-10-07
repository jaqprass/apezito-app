import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  isLoggedIn: boolean = false;
  username: string = "";

  constructor(private auth: AuthService, private router: Router) {
    this.isLoggedIn = this.auth.isLoggedIn;
  }

  ionViewWillEnter() {
    const user = localStorage.getItem('user');
    this.username = user
      ? JSON.parse(user).email.split('@')[0]
      : null;

    this.isLoggedIn = this.auth.isLoggedIn;
  }

  onButtonClick() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      this.auth.logout();
    } else {
      this.router.navigate(['login']);
    }
  }
}
