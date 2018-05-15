import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Missatge } from '../../models/missatge.model';
import { Usuari } from '../../models/usuari.model';
import { EventEmitter, Output, Input} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-converses',
  templateUrl: './converses.component.html',
  styleUrls: ['./converses.component.css'],
    providers: [LoginService]
})
export class ConversesComponent implements OnInit {

  sender: Usuari;
  receiver: Usuari;
  conversa: Missatge;
  converses: Array<Missatge>;

  conversaEmit: Array<Usuari>

  @Output() sendProperty = new EventEmitter();

  conversesUser: Array<Missatge>;
  nomUserID: Array<string>;
  nomUserIDReceiver: Array<string>;
  userNom: string;
  @Output() sendID = new EventEmitter();
  @Output() receiverID = new EventEmitter();

  constructor(private serveiLogin: LoginService){
this.nomUserID=[];
this.nomUserIDReceiver=[];

var sender;
        var receiver;

        var senderNom;
    var receiverNom;

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

            console.log(response.result);
          //  sender = this.conversesUser[i]['sender'];
            //senderNom = response.result;
            this.nomUserID.push(response.result);

              },

          error => {
            console.log(<any>error);
          }
        );

        this.serveiLogin.getUserName(this.conversesUser[i]['receiver']).subscribe(
        response => {
        //this.users = response.result;
        console.log(response.result);
      //  receiver = this.conversesUser[i]['receiver'];
      //  receiverNom = response.result;
        this.nomUserIDReceiver.push(response.result);

          },

      error => {
        console.log(<any>error);
      }
    );

            this.sender = new Usuari(sender, senderNom);
            this.receiver = new Usuari(receiver, receiverNom);
        	//	this.conversaEmit.push(this.sender, this.receiver);
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

send(event){
  this.sendProperty.emit({conversaEmit: event});
}

  ngOnInit() {
  }

}
