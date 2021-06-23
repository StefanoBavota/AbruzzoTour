import { Component, OnInit } from '@angular/core';
import { RecensioneService } from '../api/recensione.service';

@Component({
  selector: 'app-add-recensioni',
  templateUrl: './add-recensioni.page.html',
  styleUrls: ['./add-recensioni.page.scss'],
})
export class AddRecensioniPage implements OnInit {

  userInfo: any;
  titolo: any;
  descrizione: any;
  valutazione: any;
  id_utente: any;
  isLogged: boolean;


  constructor(
    public _apiService: RecensioneService
  ) { }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('login');
    this.userInfo = JSON.parse(localStorage.getItem('login'));
  }

  addRecensione() {
    if (this.titolo && this.descrizione && this.valutazione){
      // testare: console.log(this.nome, this.difficolta);
      let data = {
        titolo: this.titolo,
        descrizione: this.descrizione,
        valutazione: this.valutazione,
        id_utente: this.userInfo.id,
      }

      this._apiService.addRecensione(data).subscribe((res: any) => {
        console.log("SUCCESS ===", res);
        this.titolo = '';
        this.descrizione = '';
        this.valutazione = '';
      }, (error: any) => {
        console.log("ERROR ===", error);
      
      })
    }
  }
  

}
