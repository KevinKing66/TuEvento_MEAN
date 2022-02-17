import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { UsuarioModule } from '../models/usuario/usuario.module';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  
  user: UsuarioModule = new UsuarioModule();
  data: string | null = localStorage.getItem("token");

  constructor (private session: LoginService){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem("tkn")){
        let x = { "token" :  localStorage.getItem("tkn") };
        this.session.verifyTokens(x).subscribe(async res => {
          let userData:any = res;
          this.user = userData.authData.user;
          sessionStorage.setItem("user", JSON.stringify(userData.authData));
        });
        
          return true;
      }else{
        return false;
      }

  }
  
}
