import { Component, OnInit } from '@angular/core';
import { EventoM } from 'src/app/models/evento/evento.module';
import { VieweventsService } from 'src/app/services/viewevents.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  evento: EventoM;

  constructor(private services:VieweventsService) { 
    let parametro:any = document.location.pathname;
    
    this.services.getEventId(parametro.replace("/id/", "")).subscribe((res:EventoM)=>{
      this.evento = res;
      console.log(this.evento);

    });
    
  }

  ngOnInit(): void {
  }

}
