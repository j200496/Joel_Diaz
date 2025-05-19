import { Component, input } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})

export class GreetingComponent {
message = input('Test');
ngOnInit() {
  AOS.init();
};
}
