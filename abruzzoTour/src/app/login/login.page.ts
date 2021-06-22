import { Component, OnInit } from '@angular/core';
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
      console.log("SUCCESS ===", res);
      alert('SUCCESS');
      localStorage.setItem("login", JSON.stringify(res));
      this.isLogged = !!localStorage.getItem('login');
      console.log(this.isLogged);
      console.log("RETRIEVE ===", localStorage.getItem('login'));      
    }, (error: any) => {
      console.log("ERROR ===", error);
      alert('ERROR');
   
      
    })
  }


}
