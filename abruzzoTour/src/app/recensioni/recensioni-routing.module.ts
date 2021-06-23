import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecensioniPage } from './recensioni.page';

const routes: Routes = [
  {
    path: '',
    component: RecensioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecensioniPageRoutingModule {}
