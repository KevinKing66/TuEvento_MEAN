import { Time } from "@angular/common";
import { Data } from "@angular/router";

export class EventoM{
  _id?: string;
  nombre: String;
  ubicacion: String;
  description: String;
  fecha: string;
  precio: Number = 0;
  numeroAsistentes: Number;
  hora: any;
  creador: string;
  poster : any;
  asistentes:any [] = [];


  constructor(nombre: string, description: string, fecha: string, ubicacion: string, precio: number, numeroAsistentes:number,creador:string, poster:any){
    this.nombre = nombre;
    this.creador = creador;
    this.description = description;
    this.ubicacion = ubicacion;
    this.fecha = fecha;
    this.precio = precio;
    this.poster = poster;
    this.numeroAsistentes = numeroAsistentes;
}
 
 }
