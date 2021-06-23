import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-lista-percorsi',
  templateUrl: './lista-percorsi.page.html',
  styleUrls: ['./lista-percorsi.page.scss'],
})
export class ListaPercorsiPage implements OnInit {

  percorsi: any = [];
  isLogged: boolean;
  userInfo: any;
  id_utente: any;

  constructor(
    private alertController: AlertController,
    public _percorsoService: PercorsoService
  ) {
    this.getAllPercorsi();
  }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('login');
    if (this.isLogged) {
      this.userInfo = JSON.parse(localStorage.getItem('login'))
    }
  }

  getAllPercorsi() {
    this._percorsoService.getAllPercorsi().subscribe((res: any) => {
      this.percorsi = res;
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  addToPreferiti(id) {
    let data = {
      id_utente: this.userInfo.id,
    }

    this._percorsoService.addToPreferiti(id, data).subscribe(async (res: any) => {
      console.log("SUCCESS", res);
      const alert = await this.alertController.create({ message: 'Percorso aggiunto alla lista dei preferiti', buttons: ['OK'] });
      await alert.present();
    }, async (err: any) => {
      console.log("ERROR", err);
      const alert = await this.alertController.create({ message: 'Hai già aggiunto questo percorso ai preferiti', buttons: ['OK'] });
      await alert.present();
    })
  }
}