import { Component, inject } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { AdviceService } from '../advice.service';
import { JokeService } from '../joke.service';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ThanksComponent } from '../thanks/thanks.component';
import swal from 'sweetalert2'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
 private adviceService = inject(AdviceService);
 private jokeService = inject(JokeService);
  ad: string = "";
  part1: string = "";
  part2: string = "";
  thanks: string = ''
  private thank = inject(Router)
  public route = this.thank.navigate(['/thanks'])
  private readonly reactiveform = inject(FormBuilder)
  public frm: FormGroup = this.reactiveform.group({
    email: new FormControl("",[Validators.required]),
     name: new FormControl("",Validators.required),
     Text: new FormControl("",Validators.required)
  })
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
  onSubmit(form: any){
   if(form.valid){
    swal.fire({title: 'Sent',
              text: 'Email sent succesfully',
              icon: 'success',            
    })
   }
  }
  confirm(){ 
     swal.fire({title: 'Sent',
              text: 'Email sent succesfully',
             icon: 'success',            
    })
    
   
  }
}
