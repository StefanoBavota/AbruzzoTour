import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecensioneService {
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

  addRecensione(data) {
    return this.http.post('http://localhost/abruzzo-tour/abruzzoServer/apiRecensioni/createRecensione.php', data);
  }

  getRecensioni(id){
    return this.http.get('http://localhost/abruzzo-tour/abruzzoServer/apiRecensioni/getRecensioneByUserId.php?id='+id);
  }

  getRecensioneById(id){
    return this.http.get('http://localhost/abruzzo-tour/abruzzoServer/apiRecensioni/getRecensioneById.php?id='+id);
  }

  getRecensioniByPercorso(id){
    return this.http.get('http://localhost/abruzzo-tour/abruzzoServer/apiRecensioni/getRecensioniByPercorsoId.php?id='+id);
  }
  
  deleteRecensione(id){
    return this.http.delete('http://localhost/abruzzo-tour/abruzzoServer/apiRecensioni/deleteRecensione.php?id='+id);
  }

  editRecensione(id, data){
    return this.http.put('http://localhost/abruzzo-tour/abruzzoServer/apiRecensioni/editRecensione.php?id='+id, data);
  }
}