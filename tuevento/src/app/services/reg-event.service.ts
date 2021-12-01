import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoM } from '../models/evento/evento.module';

@Injectable({
  providedIn: 'root'
})
export class RegEventService {

  url = "http://localhost:1001/created"
  constructor(private http: HttpClient) { }

  create(event:EventoM){
   return this.http.post(this.url, event);
  }


}
