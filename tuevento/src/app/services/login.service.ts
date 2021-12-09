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

  postSendLogin(loginx:loginM){
    const re = "/UV";
    return this.http.post(this.url+re , loginx);
  }
  
  create(UserC:loginM): Observable<Object>{
    let res = "/created";
    return this.http.post(this.url+res, UserC);
   }

   delete(id: any){
    let res = "/delete/";
    return this.http.delete(this.url+res+id)
   }


   
   edit(id: string,user: JSON){
     
    let res = "/update/";
     return this.http.put(this.url+res+id, user)
   }
}
