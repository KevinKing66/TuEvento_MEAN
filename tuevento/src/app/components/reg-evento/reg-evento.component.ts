import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { EventoM } from 'src/app/models/evento/evento.module';
import { Observable, ReplaySubject } from 'rxjs';
import { RegEventService } from 'src/app/services/reg-event.service';

@Component({
  selector: 'app-reg-evento',
  templateUrl: './reg-evento.component.html',
  styleUrls: ['./reg-evento.component.css']
})
export class RegEventoComponent{
  
  file : any;
  evento: EventoM = {
    nombre: '',
    ubicacion: '',
    description: '',
    fecha: '',
    hora: '',
    precio: 0,
    numeroAsistentes: 100,
    poster: {},
    asistentes: []
  }
submitted = false;

  constructor(private service: RegEventService, ) { }


    //esta funcion concierte los archivos en base64
    convertFile(file : File) : Observable<string> {
      const result = new ReplaySubject<string>(1);
      const reader = new FileReader();
      
      reader.readAsBinaryString(file);
      reader.onload = (event:any) => {
        result.next(btoa(event.target.result.toString()));
      }
      return result;
    }
  
    onFileSelected(event:any) {
      //guardamos el arhivo recibido en una var
      let file = event.target.files[0];

      //convertimos el archivo a base64
      this.convertFile(file).subscribe((base64: string) => {
        this.evento.poster = {files : base64}
        console.log(this.evento.poster)
      });
    }
  

  

  saveEvento(): void {
    const data = {
      nombre: this.evento.nombre,
      description: this.evento.description,
      ubicacion: this.evento.ubicacion,
      precio: this.evento.precio,
      fecha: this.evento.fecha,
      hora: this.evento.hora,
      numeroAsistentes: this.evento.numeroAsistentes,
      asistentes: this.evento.asistentes,
      poster: this.evento.poster
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
      hora: '',
      precio: 0,
      asistentes: [],
      numeroAsistentes:100,
      poster: ''
    };
  }
}
  
