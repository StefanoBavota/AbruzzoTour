import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSearchbar, LoadingController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  @ViewChild('search', { static: false }) search: IonSearchbar;
  
  percorsi: any[];

  constructor(
    private alertController: AlertController,
    public _percorsoService: PercorsoService,
    private loadingCtrl: LoadingController,
  ) {
    this.getAllPercorsi();
  }

  ngOnInit() {
  }

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

  deletePercorso(id) {
    this._percorsoService.deletePercorso(id).subscribe(async (res: any) => {
      this.getAllPercorsi();
      const alert = await this.alertController.create({ message: 'Percorso eliminato', buttons: ['OK'] });
      await alert.present();
    }, (err: any) => {
      console.log("ERROR", err);
    })
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

  refreshPage(e) {
    this.getAllPercorsi();
    setTimeout(() => {
      console.log('Async operation has ended');
      e.target.complete();
    }, 1000);
  }
}
