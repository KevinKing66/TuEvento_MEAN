import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegEventService {

  url = "http://localhost:1001/created"
  constructor(private http: HttpClient) { }

  
}
