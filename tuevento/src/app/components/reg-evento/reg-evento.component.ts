import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { EventoM } from 'src/app/models/evento/evento.module';
import { RegEventService } from 'src/app/services/reg-event.service';

@Component({
  selector: 'app-reg-evento',
  templateUrl: './reg-evento.component.html',
  styleUrls: ['./reg-evento.component.css']
})
export class RegEventoComponent{

  evento: EventoM = {
  nombre: '',
  ubicacion: '',
  description: '',
  fecha: '',
  precio: 0
}
submitted = false;

  constructor(private service: RegEventService, ) { }


  saveEvento(): void {
    const data = {
      nombre: this.evento.nombre,
      description: this.evento.description,
      ubicacion: this.evento.ubicacion,
      precio: this.evento.precio,
      fecha: this.evento.fecha
    }   
    this.service.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}

  newEvento(): void {
    this.submitted = false;
    this.evento = {
      nombre: '',
      description: '',
      ubicacion: '',
      fecha: '',
      precio: 0,
    };
  }
}
  
