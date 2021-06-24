import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  isLogged: boolean;

  constructor(
    private router: Router,
    public _apiService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    let data = {
      email: this.email,
      password: this.password,
    }

    this._apiService.login(data).subscribe((res: any) => {
      localStorage.setItem("login", JSON.stringify(res));
      this.isLogged = !!localStorage.getItem('login');
      //this.router.navigateByUrl('/home');
      window.location.href = '/home';
      //console.log("RETRIEVE ===", localStorage.getItem('login'));      
    }, (error: any) => {
      console.log("ERROR ===", error);
      alert('ERROR');
    })
  }
}