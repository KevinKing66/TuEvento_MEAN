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
  toAsk: boolean = false;

  constructor(private viewEventService: VieweventsService) {
    //arrow fun. para mostrar info, y mostrar si hay errores
    
    if(this.toAsk){
      
    this.viewEventService.getEventU("el cielo")
    .subscribe(data => {
      var x = 0;
      while (x < (data.length)){
        this.listEvents.push(data[x]);
        x++;
}
    }, error => {
      console.log(error)
    })
   }else{
    this.viewEventService.getEvent()
    .subscribe(data => {
      var x = 0;
      while (x < (data.length)){
        this.listEvents.push(data[x]);
        x++;
}
    }, error => {
      console.log(error)
    })

   }
}
  ngOnInit(): void {
  }


  async toAskF(){
    this.toAsk ? false : true;
  }
}
