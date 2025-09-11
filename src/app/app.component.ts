import { Component } from '@angular/core';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from "./components/greeting/greeting.component";
import { ThanksComponent } from "./thanks/thanks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  styleUrls: ['./app.component.css'],
  template: `
    <router-outlet />`,
    
})
export class AppComponent {

  /**
   *
   */
}
