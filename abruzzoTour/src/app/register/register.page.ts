import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nome: any;
  cognome: any;
  email: any;
  password: any;

  constructor(
    private router: Router,
    public _apiService: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.nome && this.cognome && this.email && this.password) {
      let data = {
        nome: this.nome,
        cognome: this.cognome,
        email: this.email,
        password: this.password,
      }

      this._apiService.register(data).subscribe((res: any) => {
        this.router.navigateByUrl('/login');
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    }
  }
}
