import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    public _percorsoService: RecensioneService
  ) { 
    this.route.params.subscribe((param: any) => {
    this.id = param.id;
    this.getRecensioni(this.id)
  })}

  ngOnInit() {
  }
  
  getRecensioni(id) {
    this._percorsoService.getRecensioni(this.id).subscribe((res: any) => {
      this.recensioni = res;
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

}
