import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { Data } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EventoModule {
  _id: String = ""
  email: String = "";
  nombre: String = "";
  status: boolean = false ;
  description: string = "";
  ubicacion: string = "";
 }
