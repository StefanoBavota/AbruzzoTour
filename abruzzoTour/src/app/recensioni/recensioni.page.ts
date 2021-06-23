import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.page.html',
  styleUrls: ['./recensioni.page.scss'],
})
export class RecensioniPage implements OnInit {

  recensioni: any[];


  constructor(
    public _apiService: AuthService
  ) { }

  ngOnInit() {
    
  }
  getRecensioni() {
    this._apiService.getRecensioni().subscribe((res: any) => {
      console.log("SUCCESS ===", res);
      this.recensioni = res;
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

}
