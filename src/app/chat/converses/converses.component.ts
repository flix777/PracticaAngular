import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Missatge } from '../../models/missatge.model';

@Component({
  selector: 'app-converses',
  templateUrl: './converses.component.html',
  styleUrls: ['./converses.component.css'],
    providers: [LoginService]
})
export class ConversesComponent implements OnInit {
  conversesUser: Array<Missatge>;
  nomUserID: Array<string>;
  userNom: string;

  constructor(private serveiLogin: LoginService){
this.nomUserID=[];

    let user = JSON.parse(localStorage.getItem('user'));
this.userNom= user;
    this.serveiLogin.getUserID(user).subscribe(
      response => {
        //this.users = response.result;
        console.log(response.result);
        this.serveiLogin.getConversesUser(response.result).subscribe(
          response => {
            //this.users = response.result;
            console.log(response.result);
            this.conversesUser=response.result;

            for(var i=0; i<this.conversesUser.length; i++){
            this.serveiLogin.getUserName(this.conversesUser[i]['sender']).subscribe(
            response => {
            //this.users = response.result;
            console.log(response.result);

            this.nomUserID.push(response.result);

              },
          
          error => {
            console.log(<any>error);
          }
        );

        }
        console.log(this.nomUserID);

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