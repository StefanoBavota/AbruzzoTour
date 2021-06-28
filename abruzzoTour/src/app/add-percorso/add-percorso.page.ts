import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-add-percorso',
  templateUrl: './add-percorso.page.html',
  styleUrls: ['./add-percorso.page.scss'],
})
export class AddPercorsoPage implements OnInit {
  nome: any;
  info: any;
  image: any;
  latitude: any;
  longitude: any;

  constructor(
    public _percorsoService: PercorsoService,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createPercorso() {
    if (this.nome && this.info && this.image && this.latitude && this.longitude) {
      let data = {
        nome: this.nome,
        info: this.info,
        image: this.image,
        latitude: this.latitude,
        longitude: this.longitude,
      }
  
      this._percorsoService.createPercorso(data).subscribe(async(res: any) => {
        const alert = await this.alertController.create({ message: 'Percorso creato scorri verso il basso per aggiornare', buttons: ['OK'] });
        await alert.present();
        //window.location.href = '/admin';
        this.router.navigateByUrl('/admin');
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    }
  }
}
