import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home/:usuario',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu1',
    loadChildren: () => import('./pages/menu1/menu1.module').then( m => m.Menu1PageModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('./pages/menu2/menu2.module').then( m => m.Menu2PageModule)
  },  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
