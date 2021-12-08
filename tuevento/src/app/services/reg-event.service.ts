import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoM } from '../models/evento/evento.module';

@Injectable({
  providedIn: 'root'
})
export class RegEventService {

  url = "https://microeventos12.herokuapp.com/created"
  constructor(private http: HttpClient) { }

  create(event:EventoM){
   return this.http.post(this.url, event);
  }


}
