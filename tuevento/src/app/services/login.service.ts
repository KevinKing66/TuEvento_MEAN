import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModule } from '../models/usuario/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:1000";
  constructor(private http: HttpClient) { 

  }

  token(loginx:UsuarioModule){
    const re = "/login";
    return this.http.post(this.url+re , loginx);
  }

  getToken(x: any){
    let parameters = "/login";
    return this.http.post(this.url+parameters, x);
   }
   

   verifyTokens(x: any){
     var headers = new HttpHeaders({
       'authorization' : `Bearer ${x.token}`
     })
    let parameters = "/login/auth";
    return this.http.post(this.url+parameters,x, {headers});
  }
  
  create(UserC:UsuarioModule): Observable<Object>{
    let res = "/created";
    return this.http.post(this.url+res, UserC);
   }

   delete(id: string){
    let res = "/delete/";
    return this.http.delete(this.url+res+id)
   }
   
   edit(id: string,user:UsuarioModule){
    let res = "/update/";
     return this.http.put(this.url+res+id, user);
   }

}
