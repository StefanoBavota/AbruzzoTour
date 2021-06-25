import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSearchbar, LoadingController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-lista-percorsi',
  templateUrl: './lista-percorsi.page.html',
  styleUrls: ['./lista-percorsi.page.scss'],
})
export class ListaPercorsiPage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;

  percorsi: any = [];
  isLogged: boolean;
  userInfo: any;
  id_utente: any;
  image: any;
  searchedItem: any = [];

  constructor(
    private alertController: AlertController,
    public _percorsoService: PercorsoService,
    private loadingCtrl: LoadingController,
  ) {
    this.getAllPercorsi();
  }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('login');
    if (this.isLogged) {
      this.userInfo = JSON.parse(localStorage.getItem('login'))
    }
  }

  //inizio ricerca
  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }

  _ionChange(event) {
    this.percorsi = JSON.parse(localStorage.getItem('percorsi'));

    const val = event.target.value;
    if (val && val.trim() != '') {
      this.percorsi = this.percorsi.filter((item: any) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  // fine ricerca

  async getAllPercorsi() {
    const loading = await this.loadingCtrl.create({ message: 'Caricamento...' });
    await loading.present();

    this._percorsoService.getAllPercorsi().subscribe((res: any) => {
      this.percorsi = res;
      localStorage.setItem("percorsi", JSON.stringify(res));
      loading.dismiss();
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  addToPreferiti(id) {
    let data = {
      id_utente: this.userInfo.id,
    }

    this._percorsoService.addToPreferiti(id, data).subscribe(async (res: any) => {
      const alert = await this.alertController.create({ message: 'Percorso aggiunto alla lista dei preferiti', buttons: ['OK'] });
      await alert.present();
    }, async (err: any) => {
      console.log("ERROR", err);
      const alert = await this.alertController.create({ message: 'Hai già aggiunto questo percorso ai preferiti', buttons: ['OK'] });
      await alert.present();
    })
  }
}