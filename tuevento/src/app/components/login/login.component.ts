import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { loginM } from '../../models/login/login';
import  { UserM } from '../../models/user/user.module'
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

  constructor(private services: LoginService) {


   }


   loginM(loginP:Form){
    //subscribe devuelve una respuesta
    this.services.postSendLogin(this.login).subscribe(res=>{
      res? localStorage.setItem('usuario', JSON.stringify(res)) : console.log("no joda");
      
    }, error => {
      console.log(error)
    })
    ;
    this.date()
  }
  date(): any{
    this.userP= localStorage.getItem("usuario");
    this.user =  JSON.parse(this.userP);
    this.userC = this.user? true:false
  }

  clearStorage(): any{
    localStorage.clear();
    this.user = false
  }


  login: loginM = new loginM();
}

