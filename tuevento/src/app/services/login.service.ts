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
    var res = "/created";
    return this.http.post(this.url+res, UserC);
   }

   delete(id: any){
    var res = "/delete/";
    return this.http.delete(this.url+res+id)
   }

  toAsk(id: string): Observable<any>{
    var res = "/user/";
    return this.http.get(this.url+res+id)
  }
   
  //  edit(id: any){
  //    return this.http.edit
  //  }
}
