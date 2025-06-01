import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  private apiUrl = 'https://api.adviceslip.com/advice';
  constructor( private http: HttpClient) { 
  }
  public getadvice(){
   return this.http.get<any>(this.apiUrl);
  }
}
