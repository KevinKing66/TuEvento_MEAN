import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EventoM } from 'src/app/models/evento/evento.module';
import { LoginService } from 'src/app/services/login.service';
import { VieweventsService } from 'src/app/services/viewevents.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  evento: EventoM = new EventoM();
  uri: any = "http://localhost:1001/";
  asistentes: number;
  user: any;

  constructor(private services:VieweventsService, private userServices: LoginService) { 
    let parametro:string = document.location.pathname;
    this.user = sessionStorage.getItem("user");
    this.user = JSON.parse(this.user).user;
    
    this.services.getEventId(parametro.replace("/id/", "")).subscribe((res:EventoM)=>{
      this.evento = res[0];
      this.uri = this.uri + this.evento.poster;
      this.asistentes = this.evento.asistentes.length;
    })
    
    
  }

  asistir(e: EventoM): void{
    if (this.user){
      const nombre =  this.user.fullName;
      const id = this.user._id;
      const asistente = { "id": id, "fullName": nombre};
      let evento = {"_idEvento" : e._id, "nameEvento" : e.nombre, "date": e.fecha};
        if(!e.asistentes.some((id)=>{return id})){ 
          this.services.attend(e, asistente).subscribe((res)=>{ console.log(res)});
          if(!this.user.misEventos){
            this.user.misEventos = [];
          };
            this.user.misEventos.push(evento);
            console.log(this.user);
            this.userServices.edit(id, this.user).subscribe();
            this.userServices.token(this.user).subscribe(res=>{
              let token : any = res;
              localStorage.setItem("tkn", token.token);
              this.userServices.verifyTokens(res).subscribe(resp => {
                let userData:any = resp;
                this.user = userData.authData.user;
                sessionStorage.setItem("user", JSON.stringify(userData.authData));
              })
            })
        }
      }
  }

  ngOnInit(): void {
  }

}
