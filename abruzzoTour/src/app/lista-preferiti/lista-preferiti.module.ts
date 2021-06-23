import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPreferitiPageRoutingModule } from './lista-preferiti-routing.module';

import { ListaPreferitiPage } from './lista-preferiti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPreferitiPageRoutingModule
  ],
  declarations: [ListaPreferitiPage]
})
export class ListaPreferitiPageModule {}
