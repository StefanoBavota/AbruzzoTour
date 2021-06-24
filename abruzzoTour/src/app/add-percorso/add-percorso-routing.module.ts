import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPercorsoPage } from './add-percorso.page';

const routes: Routes = [
  {
    path: '',
    component: AddPercorsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPercorsoPageRoutingModule {}
