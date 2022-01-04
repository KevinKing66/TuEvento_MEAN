import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  // file = {}
  constructor() { }

  ngOnInit(): void {
  }

  MImg(event:any){
    console.log(event.target.files)
  }
}
