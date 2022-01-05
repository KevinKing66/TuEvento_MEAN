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
  
  base64Output = "";

  constructor(private service: RegEventService) { }

  ngOnInit(): void {
  }

  MImg(base64:string){
    let poster = {file : this.base64Output}
    // event.target.files[0]
    
    console.log(poster)
    this.service.img(poster).subscribe(
      (res)=> {console.log(res)}
    )
  }


  onFileSelected(event:any) {
    var file = event.target.files[0]
    this.convertFile(file).subscribe((base64: string) => {
      this.base64Output = base64;
      this.MImg(base64)
    });
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    
    reader.readAsBinaryString(file);
    reader.onload = (event:any) => {
      result.next(btoa(event.target.result.toString()));
    }
    return result;
  }
}