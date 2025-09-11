import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { EmptyComponent } from './empty/empty.component';
import { provideRouter, withEnabledBlockingInitialNavigation, withRouterConfig } from '@angular/router';
export const routes: Routes = [
  {
    path: '',component: HomeComponent
  }

];
