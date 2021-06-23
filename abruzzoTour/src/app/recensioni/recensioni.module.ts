import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecensioniPageRoutingModule } from './recensioni-routing.module';

import { RecensioniPage } from './recensioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecensioniPageRoutingModule
  ],
  declarations: [RecensioniPage]
})
export class RecensioniPageModule {}
