import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPercorsoPageRoutingModule } from './info-percorso-routing.module';

import { InfoPercorsoPage } from './info-percorso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPercorsoPageRoutingModule
  ],
  declarations: [InfoPercorsoPage]
})
export class InfoPercorsoPageModule {}
