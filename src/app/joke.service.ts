import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private urljoke = 'https://official-joke-api.appspot.com/random_joke';
  constructor(private http: HttpClient ) {

   }
  public getjokes(){
    return this.http.get<any>(this.urljoke);
   }

}
