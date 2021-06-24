import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAppPage } from './info-app.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAppPageRoutingModule {}
