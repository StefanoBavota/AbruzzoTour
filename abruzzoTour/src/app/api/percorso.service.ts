import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PercorsoService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  //funzioni di interazione col db
  getAllPercorsi() {
    return this.http.get('http://localhost/abruzzo-tour/abruzoServer/getAllPercorsi.php');
  }
}
