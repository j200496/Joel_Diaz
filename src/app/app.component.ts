import { Component } from '@angular/core';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from "./components/greeting/greeting.component";
import { ThanksComponent } from "./thanks/thanks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  styleUrls: ['./app.component.css'],
  template: `
   <app-header/>
   <app-home/>
    <router-outlet />`,
    styles:[
     `
     h1{
      color: blue;
     }
     p {
       color: red;
}
     `
    
      
    ],
    
})
export class AppComponent {
  title = 'angular';
  test = 'prueba';
  /**
   *
   */
}
