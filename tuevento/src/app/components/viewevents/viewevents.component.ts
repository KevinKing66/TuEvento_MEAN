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
  toAsk: boolean = false;
  

  constructor(private viewEventService: VieweventsService) {
    //arrow fun. para mostrar info, y mostrar si hay errores
    var x = 0;

    this.viewEventService.getEvent()
    .subscribe(data => {
      
      while (x < (data.length)){
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
    let x= 0;
    console.log(this.listEvents.length)
    while(x < this.listEvents.length){
      if(this.listEvents[x].ubicacion == "popayan"){
        console.log(this.listEvents[x])
      }
      x++
    }
  }
}
