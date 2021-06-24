import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  id_utente: any;
  isLogged: boolean;
  id_percorso: any;


  constructor(
    private route: ActivatedRoute,
    private _recensioniService: RecensioneService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_percorso = param.id;
    })
  }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('login');
    this.userInfo = JSON.parse(localStorage.getItem('login'));
  }

  addRecensione() {
    if (this.titolo && this.descrizione) {
      let data = {
        titolo: this.titolo,
        descrizione: this.descrizione,
        id_utente: this.userInfo.id,
        id_percorso: this.id_percorso,
      }

      this._recensioniService.addRecensione(data).subscribe((res: any) => {
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    }
  }
}
