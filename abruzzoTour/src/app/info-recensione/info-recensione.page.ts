import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecensioneService } from '../api/recensione.service';

@Component({
  selector: 'app-info-recensione',
  templateUrl: './info-recensione.page.html',
  styleUrls: ['./info-recensione.page.scss'],
})
export class InfoRecensionePage implements OnInit {

  id: any;
  titolo: any;
  descrizione: any;
  isLogged: boolean;
  userInfo: any;
  id_utente: any;
  id_percorso: any;

  constructor(
    private route: ActivatedRoute,
    private _recensioniService: RecensioneService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.getRecensioneById(this.id);
    })
  }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('login');
    if (this.isLogged) {
      this.userInfo = JSON.parse(localStorage.getItem('login'))
      this.id_utente = this.userInfo.id;
    }
  }


  async getRecensioneById(id) {

    this._recensioniService.getRecensioneById(id).subscribe((res: any) => {
      let recensione = res[0];
      this.titolo = recensione.titolo;
      this.descrizione = recensione.descrizione;
      this.id_percorso = recensione.id_percorso;
    }, async (err: any) => {
      console.log("ERROR", err);
    })
  }

  editRecensione() {
    let data = {
      titolo: this.titolo,
      descrizione: this.descrizione,
      id_utente: this.id_utente,
      id_percorso: this.id_percorso,
    }

    this._recensioniService.editRecensione(this.id, data).subscribe(async (res: any) => {
      const alert = await this.alertController.create({ message: 'Recensione modificata', buttons: ['OK'] });
      await alert.present();
    }, (err: any) => {
      console.log("ERROR", err);
    })
  }
}
