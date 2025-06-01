import { Component, inject } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { AdviceService } from '../advice.service';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
 private adviceService = inject(AdviceService);
 private jokeService = inject(JokeService);
  ad: string = "";
  part1: string = "";
  part2: string = "";
  constructor() {
   // this.getNewAdvice();
  }
  clearadvice(){
   this.ad = '';
  }
    clearjoke(){
     // this.ad = '';
      this.part1 ='';
      this.part2 ='';
    }
getnewjoke(){
  this.jokeService.getjokes().subscribe(jokes => {
   this.part1 = jokes.setup;
   this.part2 = jokes.punchline;
  })

  }
  getNewAdvice() {
    this.adviceService.getadvice().subscribe((datos) => {
      this.ad = datos.slip.advice;
    });
  }
}
