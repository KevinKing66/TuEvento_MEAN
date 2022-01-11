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
  toAsk: boolean  = sessionStorage.getItem("toAsk")=="true" ? true : false;
  creador: boolean = false

  constructor(private viewEventService: VieweventsService) {
    //arrow fun. para mostrar info, y mostrar si hay errores
    var x = 0;

    this.viewEventService.getEvent()
    .subscribe(data => {
      
      while (x < (data.length)){
        data[x].asistencias= data[x].asistentes.length()
        this.listEvents.push(data[x]);
        x++;
}
    }, error => {
      console.log(error)
    })

   
}
  ngOnInit(): void {
  }


  async toAskF(){
    this.toAsk ? false : true;
    let x = this.toAsk ? "true" : "false";
    sessionStorage.setItem("toAsk", x)
    let i= 0;
    while(i < this.listEvents.length){
      if(this.listEvents[i].ubicacion == "bogota"){
        this.listEventsFiltre.push(this.listEvents[i])
        console.log(this.listEventsFiltre[i]);
      }else{
        console.log("no es");
      }
      i++;
    }
    let y = "'" + this.listEventsFiltre + "'"
    sessionStorage.setItem("filtro", y)

  }

  
}
