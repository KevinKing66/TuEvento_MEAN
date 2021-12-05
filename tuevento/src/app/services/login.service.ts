import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginM } from '../models/login/login';
import { UserM } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:1000";
  constructor(private http: HttpClient) { 

  }

  createUser(newUser:UserM){
    const reCreate = "created";
    return this.http.post(this.url+reCreate, newUser);
   }
 

  postSendLogin(login:loginM){
    const re = "/UV"
    return this.http.post(this.url+re , login);
  }

}
