import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { RegEventService } from 'src/app/services/reg-event.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  file : any;
  xd : any;

  constructor(private service: RegEventService) { }

  ngOnInit(): void {
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
    var file = event.target.files[0];
    //comprobamos que este funcionando
    console.log(file)
    //convertimos el archivo a base64
    this.convertFile(file).subscribe((base64: string) => {
      //comprobamos que base64 y base64... esten funcionando
      console.log(base64)
      //llamamos la funcion que manda la info al back
      this.MImg(base64);
    });
  }

  MImg(x:string){
    let poster = {files : x}

    //vemos que el objecto no este vacio
    console.log(poster)
    //enviamos al API
    this.service.img(poster).subscribe(
      (res)=> {console.log(res)}
    )
 

  }





}