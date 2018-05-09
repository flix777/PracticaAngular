import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.css'],
  providers: [LoginService]
})
export class ConversaComponent implements OnInit {


  constructor(private serveiLogin: LoginService){
    let user = JSON.parse(localStorage.getItem('user'));

    this.serveiLogin.getUserID(user).subscribe(
      response => {
        //this.users = response.result;
        console.log(response.result);
        this.serveiLogin.getConversesUser(response.result).subscribe(
          response => {
            //this.users = response.result;
            console.log(response.result);

          },
          error => {
            console.log(<any>error);
          }
        );


      },
      error => {
        console.log(<any>error);
      }
    );

  }

  ngOnInit() {
  }

}
