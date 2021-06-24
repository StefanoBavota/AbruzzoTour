import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAppPageRoutingModule } from './info-app-routing.module';

import { InfoAppPage } from './info-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAppPageRoutingModule
  ],
  declarations: [InfoAppPage]
})
export class InfoAppPageModule {}
