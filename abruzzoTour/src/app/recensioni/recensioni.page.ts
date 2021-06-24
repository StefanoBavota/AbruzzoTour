import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecensioneService } from '../api/recensione.service';

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.page.html',
  styleUrls: ['./recensioni.page.scss'],
})
export class RecensioniPage implements OnInit {
  recensioni: any[];
  id: any;

  constructor(
    private route: ActivatedRoute,
    public _recensioniService: RecensioneService,
    private alertController: AlertController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      this.getRecensioni(this.id)
    })
  }

  ngOnInit() {
  }

  getRecensioni(id) {
    this._recensioniService.getRecensioni(this.id).subscribe((res: any) => {
      this.recensioni = res;
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  deleteRecensione(id) {
    this._recensioniService.deleteRecensione(id).subscribe(async (res: any) => {
      this.getRecensioni(this.id)
      const alert = await this.alertController.create({ message: 'Recensione eliminata', buttons: ['OK'] });
      await alert.present();
    }, (err: any) => {
      console.log("ERROR", err);
    })
  }
}
