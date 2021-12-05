import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { loginM } from '../../models/login/login';
import  { UserM } from '../../models/user/user'
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  userP: any = localStorage.getItem("usuario");
  user: any =  JSON.parse(this.userP);
  userC: boolean = this.user? true:false;
  logUp: boolean = false;

  constructor(private services: LoginService) {


   }

   loginM(loginx:Form){
    //subscribe devuelve una respuesta
    this.services.postSendLogin(this.login).subscribe(res=>{
      res? localStorage.setItem('usuario', JSON.stringify(res)) : console.log("no joda");
        this.userP= localStorage.getItem("usuario");
        this.user =  JSON.parse(this.userP);
    }, error => {
      console.log(error)
    })
    ;
  }


  clearStorage(): any{
    localStorage.clear();
    this.user = false
  }

  logUpF(): any{
    this.logUp ? this.logUp=false : this.logUp=true;  
  }


  login: loginM = new loginM();
}

