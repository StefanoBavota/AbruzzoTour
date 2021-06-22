import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nome: string;
  cognome: string;
  email: string;
  password: string;
 


  constructor(
    public _apiService: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    // testare: console.log(this.nome, this.difficolta);
    let data = {
      nome: this.nome,
      cognome: this.cognome,
      email: this.email,
      password: this.password,
    }

    this._apiService.register(data).subscribe((res: any) => {
      console.log("SUCCESS ===", res);
      alert('SUCCESS');
    }, (error: any) => {
      console.log("ERROR ===", error);
      alert('ERROR');
    })
  }  
}
