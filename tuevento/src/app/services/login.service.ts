import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginM } from '../models/login/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:1000";
  constructor(private http: HttpClient) { 

  }

  postSendLogin(login:loginM){
    const re = "/UV"
    return this.http.post(this.url+re , login);
  }
  
  create(UserC:loginM): Observable<Object>{
    const res = "/created"
    return this.http.post(this.url+res, UserC);
   }
}
