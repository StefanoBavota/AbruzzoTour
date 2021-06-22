import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {
  isLogged: boolean;

  constructor() { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.isLogged = !!localStorage.getItem('login');
  }


}
