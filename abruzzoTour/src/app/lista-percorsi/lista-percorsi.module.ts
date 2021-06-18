import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPercorsiPageRoutingModule } from './lista-percorsi-routing.module';

import { ListaPercorsiPage } from './lista-percorsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPercorsiPageRoutingModule
  ],
  declarations: [ListaPercorsiPage]
})
export class ListaPercorsiPageModule {}
