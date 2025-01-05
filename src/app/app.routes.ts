import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { HiloPageComponent } from './features/hilos/page/hilo-page/hilo-page.component';

export const routes: Routes = [
  {
    path: '' ,
    component: HomePageComponent
  },
  {
    path: 'hilo/:id',
    component: HiloPageComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];
