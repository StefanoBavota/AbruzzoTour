import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-lista-preferiti',
  templateUrl: './lista-preferiti.page.html',
  styleUrls: ['./lista-preferiti.page.scss'],
})
export class ListaPreferitiPage implements OnInit {
  id: any;
  preferiti: any = [];

  constructor(
    private route: ActivatedRoute,
    public _percorsoService: PercorsoService
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      this.getPreferiti(this.id)
    })
  }

  ngOnInit() {
  }

  getPreferiti(id) {
    this._percorsoService.getPreferiti(this.id).subscribe((res: any) => {
      this.preferiti = res;
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  deletePreferito(id){
    console.log("lol", id);
    this._percorsoService.deletePreferito(id).subscribe((res: any) => {
      this.getPreferiti(this.id)
    }, (err: any) => {
      console.log("ERROR", err);
    })
  }
}
