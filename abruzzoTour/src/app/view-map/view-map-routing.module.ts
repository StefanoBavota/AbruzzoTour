import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMapPage } from './view-map.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMapPageRoutingModule {}
