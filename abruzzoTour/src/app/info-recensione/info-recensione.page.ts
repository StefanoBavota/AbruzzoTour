import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';
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
  id_percorso: any
  image: any;

  constructor(
    private route: ActivatedRoute,
    private _recensioniService: RecensioneService,
    private _percorsoService: PercorsoService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
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

  async getPercorsoById(id_percorso) {
    this._percorsoService.getPercorsoById(this.id_percorso).subscribe((res: any) => {
      let percorso = res[0];
      this.image = percorso.image;
    }, async (err: any) => {
      console.log("ERROR", err);
    })
  }

  async getRecensioneById(id) {

    this._recensioniService.getRecensioneById(id).subscribe((res: any) => {
      let recensione = res[0];
      this.titolo = recensione.titolo;
      this.descrizione = recensione.descrizione;
      this.id_percorso = recensione.id_percorso;
      this.getPercorsoById(this.id_percorso);
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
