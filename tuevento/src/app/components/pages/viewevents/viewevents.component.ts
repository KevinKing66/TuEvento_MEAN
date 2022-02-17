import { Component, OnInit } from '@angular/core';
import { EventoM } from 'src/app/models/evento/evento.module';
import { LoginService } from 'src/app/services/login.service';
import { VieweventsService } from 'src/app/services/viewevents.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css']
})
export class VieweventsComponent{

  listEvents: EventoM[] = [];
  listEventsFiltre: EventoM[] = [];
  filtre: string = '';
  toAsk: boolean = false;
  user: any;

  constructor(private viewEventService: VieweventsService, private userServices: LoginService) {

    this.user = sessionStorage.getItem("user");
    this.user = JSON.parse(this.user).user;
    var x = 0;

    this.viewEventService.getEvent()
    .subscribe(data => {
      while (x < (data.length)){
        data[x].numeroAsistentes = data[x].asistentes.length;
        this.user ? (data[x].creador == this.user._id ? data[x].creador = true : data[x].creador = false) : data[x].creador = false;
        this.listEvents.push(data[x]);
        x++;
}
    }, error => {
      console.log(error);
    })

   
}

  toAskF(): void{
    this.listEventsFiltre = [];
    this.filtre == "" ? this.toAsk = false : this.toAsk = true;
    let i= 0;
    while(i < this.listEvents.length){
      if(this.listEvents[i].ubicacion.toLowerCase() == this.filtre.toLowerCase()){
          this.listEventsFiltre.includes(this.listEvents[i]) ? console.log("ejecucion completa") : this.listEventsFiltre.push(this.listEvents[i]);
      }
      i++;
    }
  }


  asistir(e: EventoM): void{
    if (this.user){
      const nombre =  this.user.fullName;
      const id = this.user._id;
      const asistente = { "id": id, "fullName": nombre};
      let evento = {"_idEvento" : e._id, "nameEvento" : e.nombre, "date": e.fecha};
        if(!e.asistentes.some((id)=>{return id})){ 
          this.viewEventService.attend(e, asistente).subscribe((res)=>{ console.log(res)});
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

  
}
