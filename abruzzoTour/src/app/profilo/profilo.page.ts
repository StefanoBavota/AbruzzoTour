import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {
  isLogged: boolean;
  userInfo: any;
  id_utente: any;
  isAdmin: boolean;

  constructor(
    private router: Router,
  ) {}

  ionViewWillEnter() { 
    window.onload = function () {
      window.location.reload();
    }
  }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('login');
    if (this.isLogged) {
      this.userInfo = JSON.parse(localStorage.getItem('login'))
      this.id_utente = this.userInfo.id;
      this.isAdmin = this.userInfo.is_admin;
    }
  }

  logout() {
    localStorage.clear();
    this.isLogged = !!localStorage.getItem('login');
    this.router.navigateByUrl('/login');
  }
}
