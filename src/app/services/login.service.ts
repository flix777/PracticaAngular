import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class LoginService {
    public url: string;

  constructor(private http: Http) {
  this.url = GLOBAL.url;
  }

getAllUsers(){
  let headers = new Headers({'Content-Type':'application/json'});
  return this.http.get(this.url+'getAllUsers',{headers: headers}).map(res => res.json());
}

getUserID(user){
  let headers = new Headers({'Content-Type':'application/json'});
  return this.http.get(this.url+'getId/'+user,{headers: headers}).map(res => res.json());
}

getUserName(user){
  let headers = new Headers({'Content-Type':'application/json'});
  return this.http.get(this.url+'getName/'+user,{headers: headers}).map(res => res.json());
}


getConversesUser(userID){
  let headers = new Headers({'Content-Type':'application/json'});
  return this.http.get(this.url+'getAllResumeChats/'+userID,{headers: headers}).map(res => res.json());
}

getConversa(senderID, receiverID){
  let headers = new Headers({'Content-Type':'application/json'});
  return this.http.get(this.url+'getChat/'+senderID+'/'+receiverID,{headers: headers}).map(res => res.json());
}

enviarMissatge(sender, receiver, message){
  let params = {sender: sender, receiver: receiver, message: message};
  let headers = new Headers({'Content-Type':'application/json'});
  return this.http.post(this.url+'sendMessage',params,{headers: headers})
  .map(res => res.json());
}


}
