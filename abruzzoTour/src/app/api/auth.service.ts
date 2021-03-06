import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  login(data) {
    return this.http.post('http://localhost/abruzzo-tour/abruzzoServer/apiAuth/login.php', data);
  }

  register(data) {
    return this.http.post('http://localhost/abruzzo-tour/abruzzoServer/apiAuth/register.php', data);
  }
}
