import { Time } from "@angular/common";
import { Data } from "@angular/router";

export class EventoM{
  _id?: string;
  nombre: String = "";
  ubicacion: String = "";
  description: String = "";
  fecha: string = "";
  precio: Number = 0;
  numeroAsistentesMaximo: Number = 10;
  hora: any;
  creador: string = "";
  poster: any;
  asistentes: object [] = []; 
 }
