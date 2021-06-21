import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-info-percorso',
  templateUrl: './info-percorso.page.html',
  styleUrls: ['./info-percorso.page.scss'],
})
export class InfoPercorsoPage implements OnInit {

  id: any;
  nome: any;
  difficolta: any;
  info: any;
  image: any;
  latitude: any;
  longitude: any;
  //percorso: any;

  constructor(
    private route: ActivatedRoute,
    private _percorsoService: PercorsoService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.getPercorsoById(this.id);
    })
  }

  ngOnInit() {
  }

  async getPercorsoById(id) {
    //const loading = await this.alertController.create({ message: 'Caricamento...' });
    //await loading.present();

    this._percorsoService.getPercorsoById(id).subscribe((res: any) => {
      let percorso = res[0];
      this.nome = percorso.nome;
      this.difficolta = percorso.difficolta;
      this.info = percorso.info;
      this.image = percorso.image;
      this.latitude = percorso.latitude;
      this.longitude = percorso.longitude;
      //loading.dismiss();
    }, async (err: any) => {
      console.log("ERROR", err);
      const alert = await this.alertController.create({ message: 'Ops, qualcosa è andato storto', buttons: ['OK'] });
      await alert.present();
      this.router.navigateByUrl('/lista-percorsi');
    })
  }
}
