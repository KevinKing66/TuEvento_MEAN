import { Component, OnInit } from '@angular/core';
import { EventoM } from 'src/app/models/evento/evento.module';
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
  m: any = localStorage.getItem("usuario");
  constructor(private viewEventService: VieweventsService) {
    //arrow fun. para mostrar info, y mostrar si hay errores
    var x = 0;

    this.viewEventService.getEvent()
    .subscribe(data => {
      console.log(this.toAsk);
      console.log(this.m);
      while (x < (data.length)){
        data[x].asistencias= data[x].asistentes.length;
        data[x].creador == JSON.parse(this.m)._id ? data[x].creador = true : data[x].creador = false; 
        console.log(data[x].creadorB);
        console.log(data);
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
    const nombre =  JSON.parse(this.m).fullName;
    const id = JSON.parse(this.m)._id;
    const asistente = { "id": id, "fullName": nombre};
    if(!e.asistentes.includes(asistente)){
    e.asistentes.push(asistente);
    asistente.fullName ? alert("has sido registrado de manera correcta") : alert("asegurate de inicia session para poder inscribirte a los evento");
    this.viewEventService.attend(asistente).subscribe( (res)=> console.log(res));
    }
  }

  
}
