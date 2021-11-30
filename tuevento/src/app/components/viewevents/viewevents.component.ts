import { Component, OnInit } from '@angular/core';
import { EventoModule } from 'src/app/models/evento/evento.module';
import { VieweventsService } from 'src/app/services/viewevents.service';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css']
})
export class VieweventsComponent implements OnInit {

  listEvents: EventoModule[] =[];

  constructor(private viewEventService: VieweventsService) {
    //arrow fun. para mostrar info, y mostrar si hay errores
    this.viewEventService.getEvent().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
    })
   }

  ngOnInit(): void {
  }

}
