import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRecensionePageRoutingModule } from './info-recensione-routing.module';

import { InfoRecensionePage } from './info-recensione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRecensionePageRoutingModule
  ],
  declarations: [InfoRecensionePage]
})
export class InfoRecensionePageModule {}
