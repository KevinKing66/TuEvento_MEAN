import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserM } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class LogupService {

  url = "http://localhost:1000/created"
  constructor(private http: HttpClient) { }

  create(NUser:UserM){
   return this.http.post(this.url, NUser);
  }

}
