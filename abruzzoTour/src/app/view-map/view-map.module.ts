import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMapPageRoutingModule } from './view-map-routing.module';

import { ViewMapPage } from './view-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMapPageRoutingModule
  ],
  declarations: [ViewMapPage]
})
export class ViewMapPageModule {}
