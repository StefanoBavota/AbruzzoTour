import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPercorsiPage } from './lista-percorsi.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPercorsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPercorsiPageRoutingModule {}
