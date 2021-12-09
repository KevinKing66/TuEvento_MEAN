import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { loginM } from '../../models/login/login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  userP: any = localStorage.getItem("usuario");
  user: any =  JSON.parse(this.userP);
  logUp: boolean = false;
  UserC: loginM = {
    fullName: '',
    email: '',
    password:'',
  };

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

  saveUser(): void {
    const data = {
      email: this.UserC.email,
      fullName: this.UserC.fullName,
      password: this.UserC.password,
    }
    this.services.create(data)
    .subscribe(
      res => {
        console.log(res);
        this.logUp = false;
      },
      error => {
        console.log(error);
      });
}

deleteUser(id: any){
  this.services.delete(id).subscribe(res =>{
    console.log(res);
    this.clearStorage();
  },error=>{
    console.log(error)
  })
}

editUser(){
  let id = this.user._id;
  this.services.edit(id, this.user).subscribe(res=>{
    console.log(res);
  },error=>{
    console.log(error)
  });
}

  userF: loginM = this.user;
  login: loginM = new loginM();
}

