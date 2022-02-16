import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { EventoM } from 'src/app/models/evento/evento.module';
import { Observable, ReplaySubject } from 'rxjs';
import { RegEventService } from 'src/app/services/reg-event.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-reg-evento',
  templateUrl: './reg-evento.component.html',
  styleUrls: ['./reg-evento.component.css']
})
export class RegEventoComponent{
  
  file : any;
  user : any = sessionStorage.getItem("user");
  preview: string;
  
  evento: EventoM = new EventoM();
  submitted = false;

  constructor(private service: RegEventService, private sanitizer: DomSanitizer ) { 
    this.user = JSON.parse(this.user);
    console.log(this.user.user)
    this.evento.creador = this.user.user._id;
  }


  
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
        this.evento.poster = {files : base64};
      });

      //preview
      this.previewF(file).then((img: any) =>{
        this.preview = img.base
      })
    }
  

  

  saveEvento(): void {
    this.service.create(this.evento)
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
    this.evento = new EventoM();
    this.evento.creador = this.user.user._id;
    this.preview = ""
  }

  //base 64, miniatura
  previewF = async (event: any) => new Promise((resolve)=> {
    try{
      const unsafeimg = window.URL.createObjectURL(event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeimg);
      const reader = new FileReader();
      reader.readAsDataURL(event);
      reader.onload = () =>{
        resolve({
          blob: event,
          image,
          base: reader.result
        });
        };
      reader.onerror = error =>{
        resolve({
          blob: event,
          image,
          base:null
        });
      };
    }catch(e){
      return null;
    };
  });
  
}
  
