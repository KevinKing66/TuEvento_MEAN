import { Component, OnInit } from '@angular/core';
import { UserM } from 'src/app/models/user/user';
import { Form } from '@angular/forms';
import { LogupService } from 'src/app/services/logup.service';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {
  NUser: UserM = {
    email: '',
    fullName: '',
    phoneNumber: 0,
    password: ""
  };


  constructor(private service: LogupService) { }

  ngOnInit(): void {
  }

  saveUser(): void{
    const data= {
      email: this.NUser.email,
      fullName: this.NUser.fullName,
      phoneNumber:  this.NUser.phoneNumber,
      password: this.NUser.password
    }
    this.service.create(data).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    })
  }

}
