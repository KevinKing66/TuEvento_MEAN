import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Form } from '@angular/forms';
import { UsuarioModule } from 'src/app/models/usuario/usuario.module';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  userP: any = localStorage.getItem("usuario");
  user: UsuarioModule = new UsuarioModule();
  status: string = "registro";

  constructor(private services: LoginService) {
    console.log(document.location);
    if(localStorage.getItem("tkn")){
      let x = { "token" :  localStorage.getItem("tkn") };
      this.comeBackData(x);
    }
   }

   loginM(loginx:Form): void{
    this.services.token(this.user).subscribe(res=>{
      let token : any = res;
      localStorage.setItem("tkn", token.token);
      this.comeBackData(res);
    });
  }

  comeBackData(x: any): void{
    this.services.verifyTokens(x).subscribe(resp => {
      let userData:any = resp;
      this.user = userData.authData.user;
      this.status = "onSession";
      sessionStorage.setItem("user", JSON.stringify(userData.authData));
    });

  }



  clearStorage(): void{
    localStorage.clear();
    sessionStorage.clear();
    this.status = "registro";
  }

  logUpFunction(): void{
    this.status=="logUp" ? this.status="registro":this.status = "logUp";  
  }

  modFunction(): void{
    this.status=="mod" ? this.status="onSession":this.status="mod";
  }

  saveUser(): void {
    this.services.create(this.user)
    .subscribe(
      res => {
        localStorage.setItem('usuario', JSON.stringify(res));
        this.userP= localStorage.getItem("usuario");
        this.user =  JSON.parse(this.userP);
        this.status = "registro";
      },
      error => {
        console.log(error);
      });
}

deleteUser(id: any): void{
  this.services.delete(id).subscribe(res =>{
    this.clearStorage();
  },error=>{
    console.log(error)
  })
}

editUser(): void{
  let id: any = this.user._id;
  this.services.edit(id, this.user).subscribe(res=>{
  },error=>{
    console.log(error)
  });
}
}

