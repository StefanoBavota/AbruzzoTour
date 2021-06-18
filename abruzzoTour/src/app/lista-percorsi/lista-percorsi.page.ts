import { Component, OnInit } from '@angular/core';
import { PercorsoService } from '../api/percorso.service';

@Component({
  selector: 'app-lista-percorsi',
  templateUrl: './lista-percorsi.page.html',
  styleUrls: ['./lista-percorsi.page.scss'],
})
export class ListaPercorsiPage implements OnInit {

  percorsi: any = [];

  constructor(
    public _percorsoService: PercorsoService
  ) {
    this.getAllPercorsi();
  }

  ngOnInit() {
  }

  getAllPercorsi() {
    this._percorsoService.getAllPercorsi().subscribe((res: any) => {
      console.log("SUCCESS ===", res);
      this.percorsi = res;
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }
}