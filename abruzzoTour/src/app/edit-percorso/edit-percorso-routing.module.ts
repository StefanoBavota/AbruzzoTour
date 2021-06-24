import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPercorsoPage } from './edit-percorso.page';

const routes: Routes = [
  {
    path: '',
    component: EditPercorsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPercorsoPageRoutingModule {}
