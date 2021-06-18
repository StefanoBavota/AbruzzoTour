import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPercorsoPage } from './info-percorso.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPercorsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPercorsoPageRoutingModule {}
