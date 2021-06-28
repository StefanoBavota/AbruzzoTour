import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-edit-percorso',
  templateUrl: './edit-percorso.page.html',
  styleUrls: ['./edit-percorso.page.scss'],
})
export class EditPercorsoPage implements OnInit {
  id: any;
  nome: any;
  info: any;
  image: any;
  latitude: any;
  longitude: any;

  constructor(
    private route: ActivatedRoute,
    public _percorsoService: PercorsoService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      this.getPercorsoById(this.id);
    })
  }

  ngOnInit() {
  }

  async getPercorsoById(id) {
    this._percorsoService.getPercorsoById(id).subscribe((res: any) => {
      let percorso = res[0];
      this.nome = percorso.nome;
      this.info = percorso.info;
      this.image = percorso.image;
      this.latitude = percorso.latitude;
      this.longitude = percorso.longitude;
    }, async (err: any) => {
      console.log("ERROR", err);
      const alert = await this.alertController.create({ message: 'Ops, qualcosa è andato storto', buttons: ['OK'] });
      await alert.present();
      this.router.navigateByUrl('/lista-percorsi');
    })
  }

  editPercorso() {
    let data = {
      nome: this.nome,
      info: this.info,
      image: this.image,
      latitude: this.latitude,
      longitude: this.longitude,
    }

    this._percorsoService.editPercorso(this.id, data).subscribe(async (res: any) => {
      //window.location.href = '/admin';
      this.router.navigateByUrl('/admin');
      const alert = await this.alertController.create({ message: 'Percorso modificato scorri verso il basso per aggiornare', buttons: ['OK'] });
      await alert.present();
    }, (err: any) => {
      console.log("ERROR", err);
    })
  }
}
