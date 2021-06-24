import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  percorsi: any = [];

  constructor(
    private alertController: AlertController,
    public _percorsoService: PercorsoService
  ) {
    this.getAllPercorsi();
  }

  ngOnInit() {
  }

  getAllPercorsi() {
    this._percorsoService.getAllPercorsi().subscribe((res: any) => {
      this.percorsi = res;
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
}
