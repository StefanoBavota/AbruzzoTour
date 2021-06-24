import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  isLogged: boolean;
  userInfo: any;
  isAdmin: boolean;
  
  constructor(
    private router: Router,
  ) {}

  ngOnInit(){
    this.isLogged = !!localStorage.getItem('login');
    if (this.isLogged) {
      this.userInfo = JSON.parse(localStorage.getItem('login'))
      this.isAdmin = this.userInfo.is_admin;
    }
  }

  logout() {
    localStorage.clear();
    this.isLogged = !!localStorage.getItem('login');
    //this.router.navigateByUrl('/login');
    window.location.href = '/login';
  }
}
