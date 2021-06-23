import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPreferitiPage } from './lista-preferiti.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPreferitiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPreferitiPageRoutingModule {}
