import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
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
  mod: boolean = false;
  UserC: loginM = {
    fullName: '',
    email: '',
    password:'',
    phoneNumber: 0
  };

  constructor(private services: LoginService) {


   }

   loginM(loginx:Form){
    //subscribe devuelve una respuesta
    this.services.postSendLogin(this.login).subscribe(res=>{
      if (res) localStorage.setItem('usuario', JSON.stringify(res));
        this.userP= localStorage.getItem("usuario");
        this.user =  JSON.parse(this.userP);
    }, error => {
      console.log(error)
    })
    ;
  }



  clearStorage(): any{
    localStorage.clear();
    this.user = false;
  }

  logUpF(): any{
    this.logUp ? this.logUp=false : this.logUp=true;  
  }

  saveUser(): void {
    const data = {
      email: this.UserC.email,
      fullName: this.UserC.fullName,
      password: this.UserC.password,
      phoneNumber: this.UserC.phoneNumber
    }
    this.services.create(data)
    .subscribe(
      res => {
        localStorage.setItem('usuario', JSON.stringify(res));
        this.userP= localStorage.getItem("usuario");
        this.user =  JSON.parse(this.userP);
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

xd():any{
  this.mod? this.mod=false : this.mod=true;
}

  userF: loginM = this.user;
  login: loginM = new loginM();
}

