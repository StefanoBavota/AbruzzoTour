import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPercorsoPageRoutingModule } from './add-percorso-routing.module';

import { AddPercorsoPage } from './add-percorso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPercorsoPageRoutingModule
  ],
  declarations: [AddPercorsoPage]
})
export class AddPercorsoPageModule {}
