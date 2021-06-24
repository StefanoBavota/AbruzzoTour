import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPercorsoPageRoutingModule } from './edit-percorso-routing.module';

import { EditPercorsoPage } from './edit-percorso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPercorsoPageRoutingModule
  ],
  declarations: [EditPercorsoPage]
})
export class EditPercorsoPageModule {}
