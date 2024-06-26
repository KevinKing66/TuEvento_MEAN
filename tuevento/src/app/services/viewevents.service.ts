import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoM } from '../models/evento/evento.module';

@Injectable({
  providedIn: 'root'
})
export class VieweventsService {

  url = "http://localhost:1001/evento"
  constructor(private http: HttpClient) { }

  getEvent(): Observable<any>{
    return this.http.get(this.url);
  }

  getEventId(_id : string){
    return this.http.get(this.url+"/"+_id);
  }

  attend(e:EventoM, asistente: object){
    return this.http.put(this.url+"/subscribe/"+e._id, asistente);
  }
  
}
