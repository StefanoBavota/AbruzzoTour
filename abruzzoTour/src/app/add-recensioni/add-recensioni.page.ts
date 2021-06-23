import { Component, OnInit } from '@angular/core';
import { RecensioneService } from '../api/recensione.service';

@Component({
  selector: 'app-add-recensioni',
  templateUrl: './add-recensioni.page.html',
  styleUrls: ['./add-recensioni.page.scss'],
})
export class AddRecensioniPage implements OnInit {

  titolo: any;
  descrizione: any;
  valutazione: any;


  constructor(
    public _apiService: RecensioneService
  ) { }

  ngOnInit() {
  }

  addRecensione() {
    // testare: console.log(this.nome, this.difficolta);
    let data = {
      titolo: this.titolo,
      descrizione: this.descrizione,
      valutazione: this.valutazione,
    }

    this._apiService.addRecensione(data).subscribe((res: any) => {
      console.log("SUCCESS ===", res);
      this.titolo = '';
      this.descrizione = '';
      this.valutazione = '';
      alert('SUCCESS');
    }, (error: any) => {
      console.log("ERROR ===", error);
      alert('ERROR');
    })
  }

}
