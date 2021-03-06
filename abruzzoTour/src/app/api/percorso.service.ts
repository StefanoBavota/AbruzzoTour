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
    return this.http.get('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/getAllPercorsi.php');
  }

  getPercorsoById(id){
    return this.http.get('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/getPercorsoById.php?id='+id);
  }

  addToPreferiti(id, data){
    return this.http.post('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/addToPreferiti.php?id='+id, data);
  }

  getPreferiti(id){
    return this.http.get('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/getPreferitiByUserId.php?id='+id);
  }

  deletePreferito(id){
    return this.http.delete('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/deletePreferito.php?id='+id);
  }

  deletePercorso(id){
    return this.http.delete('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/deletePercorso.php?id='+id);
  }

  editPercorso(id, data){
    return this.http.put('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/updatePercorso.php?id='+id, data);
  }

  createPercorso(data){
    return this.http.post('http://localhost/abruzzo-tour/abruzzoServer/apiPercorso/createPercorso.php', data);
  }
}
