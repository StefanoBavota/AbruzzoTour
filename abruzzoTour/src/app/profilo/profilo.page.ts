import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {
  isLogged: boolean;

  constructor(
    private router: Router,
  ) { }

  ionViewWillEnter() { 
    window.onload = function () {
      window.location.reload();
    }
  }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('login');
  }

  logout() {
    localStorage.clear();
    this.isLogged = !!localStorage.getItem('login');
    this.router.navigateByUrl('/login');
  }
}
