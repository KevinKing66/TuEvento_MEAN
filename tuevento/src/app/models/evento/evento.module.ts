export class EventoM{
  _id?: string;
  nombre: String = "";
  ubicacion: String = "";
  description: String = "";
  fecha: string = "";
  precio: Number = 0;
  numeroAsistentesMaximo: Number = 10000;
  hora: any;
  creador: string = "";
  poster: any;
  asistentes: object [] = []; 
 }
