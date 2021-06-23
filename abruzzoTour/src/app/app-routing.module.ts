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
  },
  {
    path: 'view-map/:id/:latitude/:longitude',
    loadChildren: () => import('./view-map/view-map.module').then( m => m.ViewMapPageModule)
  },
  {
    path: 'profilo',
    loadChildren: () => import('./profilo/profilo.module').then( m => m.ProfiloPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recensioni',
    loadChildren: () => import('./recensioni/recensioni.module').then( m => m.RecensioniPageModule)
  },
  {
    path: 'add-recensioni',
    loadChildren: () => import('./add-recensioni/add-recensioni.module').then( m => m.AddRecensioniPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista-preferiti/:id',
    loadChildren: () => import('./lista-preferiti/lista-preferiti.module').then( m => m.ListaPreferitiPageModule)
  },



];





@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
