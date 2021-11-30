import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VieweventsService {

  url = "http://localhost:1001/evento"
  constructor(private http: HttpClient) { }

  getEvent(): Observable<any>{
    return this.http.get(this.url)
  }
}
