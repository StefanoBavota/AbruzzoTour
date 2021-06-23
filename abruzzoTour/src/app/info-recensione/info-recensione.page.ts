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
  valutazione: any;


  constructor(
    private route: ActivatedRoute,
    private _percorsoService: RecensioneService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.getRecensioneByRecId(this.id);
    })
  }

  ngOnInit() {

  }

  async getRecensioneByRecId(id){

    this._percorsoService.getRecensioneByRecId(id).subscribe((res: any) => {
      let recensione = res[0];
      this.titolo = recensione.titolo;
      this.descrizione = recensione.descrizione;
      this.valutazione = recensione.valutazione;

    }, async (err: any) => {
      console.log("ERROR", err);
      //const alert = await this.alertController.create({ message: 'Ops, qualcosa è andato storto', buttons: ['OK'] });
      //await alert.present();
      //this.router.navigateByUrl('/lista-percorsi');
    })
  }

}
