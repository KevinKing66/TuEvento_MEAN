export class EventoM{
  _id?: string;
  nombre: String;
  ubicacion: String;
  description: String;
  precio: Number = 0;

  constructor(nombre: string, description: string, ubicacion: string, precio: number ){
    this.nombre = nombre;
    this.description = description;
    this.ubicacion = ubicacion;
    this.precio = precio;
}

 }
