import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRecensioniPageRoutingModule } from './add-recensioni-routing.module';

import { AddRecensioniPage } from './add-recensioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRecensioniPageRoutingModule
  ],
  declarations: [AddRecensioniPage]
})
export class AddRecensioniPageModule {}
