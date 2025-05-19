import { Component, inject } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { AdviceService } from '../advice.service';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
 private adviceService = inject(AdviceService);
  ad: string = "";
  other: string = "";
  another: string = "";
  constructor() {
   // this.getNewAdvice();
  }
  clearadvice(){
   this.ad = '';
  }
    clearjoke(){
     // this.ad = '';
      this.other ='';
      this.another ='';
    }
  getnewjoke(){
    this.adviceService.getjjoke().subscribe(data =>{
      this.other = data.setup;
      this.another = data.punchline;
    })
  }
  getNewAdvice() {
    this.adviceService.getadvice().subscribe((datos) => {
      this.ad = datos.slip.advice;
    });
  }
}
