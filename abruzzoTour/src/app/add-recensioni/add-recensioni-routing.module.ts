import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecensioniPage } from './add-recensioni.page';

const routes: Routes = [
  {
    path: '',
    component: AddRecensioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRecensioniPageRoutingModule {}
