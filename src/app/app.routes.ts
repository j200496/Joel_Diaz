import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { EmptyComponent } from './empty/empty.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },

];
