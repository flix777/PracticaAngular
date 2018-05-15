import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Missatge } from '../../models/missatge.model';
import { Usuari } from '../../models/usuari.model';
declare var $:any;

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.css'],
  providers: [LoginService]
})
export class ConversaComponent implements OnInit {

  private _chat;
  sender: Usuari;
  receiver: Usuari;

  userID: Number;
  userR: Number;
  userRNom: String

  soyDestinatari = true;
  missatges: Array<Missatge>;
  user;


  constructor(private serveiLogin: LoginService){}

    get chat() {
      return this._chat;
    }

    @Input()
    set chat(chat: any) {
      this._chat = chat;
      setInterval(() => {this.serveiLogin.getConversa(this.chat.sender, this.chat.receiver).subscribe(
    		response => {
    			this.missatges = response.result;
          console.log(response.result);
    		},
    		error => {
    			console.log(<any>error);
    		}
  	);}, 1000);


    let user = JSON.parse(localStorage.getItem('user'));
    this.serveiLogin.getUserID(user).subscribe(
      response => {
        //this.users = response.result;
        console.log(response.result);
  this.userID = response.result;
  if (this.chat.sender == this.userID){
  this.userR = this.chat.receiver;
  }else{
  this.userR = this.chat.sender;
  }
  this.serveiLogin.getUserName(this.userR).subscribe(
    response => {
  console.log("aquiiiiiiii"+this.userR);

  this.userRNom=response.result;
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



  //  let user = JSON.parse(localStorage.getItem('user'));
/*
    this.serveiLogin.getConversa(senderID, receiverID).subscribe(
      response => {
        //this.users = response.result;
        console.log(response.result);
      },
      error => {
        console.log(<any>error);
      }
    );
    */

ngDoCheck(){

}

  ngOnInit() {

    $("#missatge").on('keyup', (e) => {


  		if (e.keyCode == 13) {
  			this.serveiLogin.enviarMissatge(this.userID, this.userR, $("#missatge").val()).subscribe(
  				response => {
  					$("#missatge").val('');
  				},
  				error => {
  					console.log(<any>error);
  				}
			);
  		}
  	});



  }

}
