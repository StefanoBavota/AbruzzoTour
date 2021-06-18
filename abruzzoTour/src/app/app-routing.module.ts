import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-percorsi',
    loadChildren: () => import('./lista-percorsi/lista-percorsi.module').then( m => m.ListaPercorsiPageModule)
  },
  {
    path: 'info-percorso/:id',
    loadChildren: () => import('./info-percorso/info-percorso.module').then( m => m.InfoPercorsoPageModule)
  },  {
    path: 'view-map',
    loadChildren: () => import('./view-map/view-map.module').then( m => m.ViewMapPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
