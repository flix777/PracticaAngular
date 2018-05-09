import { Component, OnInit } from '@angular/core';
import { Usuari } from '../../models/usuari.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  users: Array<any>;

  constructor(
  //  private location: Location,
//    private route: ActivatedRoute,
    private serveiLogin: LoginService, private router: Router) {


      this.serveiLogin.getAllUsers().subscribe(
        response => {
          this.users = response.result;
          console.log(this.users);

        },
        error => {
          console.log(<any>error);
        }
      );


     }

     userLogin(){
 console.log("AAA");
  let user = $("#inputUser").val();
  for(var i=0; i<this.users.length; i++){
    if (this.users[i].name == user){
      $("#loginValid").html("Valid");
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/chat']);

/*
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
*/
    //
    }
  }

     }

  ngOnInit() {
  }

  executar(){

    }


}
