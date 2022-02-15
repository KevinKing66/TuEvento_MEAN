import { Component, OnInit } from '@angular/core';
import { EventoM } from 'src/app/models/evento/evento.module';
import { LoginService } from 'src/app/services/login.service';
import { VieweventsService } from 'src/app/services/viewevents.service';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css']
})
export class VieweventsComponent implements OnInit {

  listEvents: EventoM[] = [];
  listEventsFiltre: EventoM[] = [];
  filtre: string = '';
  toAsk: boolean = false;
  user: any;

  constructor(private viewEventService: VieweventsService, private userServices: LoginService) {
    if(sessionStorage.getItem("user")){
    this.user = sessionStorage.getItem("user");
    this.user = JSON.parse(this.user);
    this.user = this.user.user;
  }
    var x = 0;

    this.viewEventService.getEvent()
    .subscribe(data => {
      while (x < (data.length)){
        data[x].asiclsstencias= data[x].asistentes.length;
        // this.m ? (data[x].creador == JSON.parse(this.m)._id ? data[x].creador = true : data[x].creador = false) : data[x].creador = false;
        this.listEvents.push(data[x]);
        x++;
}
    }, error => {
      console.log(error);
    })

   
}
  ngOnInit(): void {
  }


  toAskF(){
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

  asistir(e: EventoM){
    if (this.user){
      const nombre =  this.user.fullName;
      const id = this.user._id;
      const asistente = { "id": id, "fullName": nombre};

        if(!e.asistentes.includes(asistente)){ 
          // this.viewEventService.attend(e, asistente).subscribe((res)=>{ console.log(res)});
          
        }
        if(!this.user.misEventos){
          this.user.misEventos = [];
        }
        
        this.user.misEventos.push({_idEvento : e._id, nameEvento : e.nombre, date: e.fecha});
        console.log(this.user)
        this.userServices.edit(id, this.user).subscribe(res=>{

          console.log(res)
        });

      }else{
        alert("debes iniciar sesion para poder inscribirte a nuestros eventos");
      };
  }

  
}
