import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';
import { environment } from '../environments/environment';
declare var firebase: any

@Injectable()
export class LoginService {
  router: any;

  useri:any=[];
  actual_user:any="";

  constructor() { 
    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/users/').on('child_added',(snapshot) =>
    {this.useri.push(snapshot.val())
    })

  }
  loginUser(e):boolean{
    e.preventDefault();
    console.log(e);
    var username=e.target.elements[0].value;
    var password= e.target.elements[1].value;
   // username=stringify(username);
   // password=stringify(password);
    console.log(username,password);
   
    for(let user of this.useri){
        if(username === user.username &&password=== user.password)
        {this.actual_user=user.username;
          environment.actualUser=user.username;
        firebase.database().ref('/act ').update({actual_user:this.actual_user});
        return true;}
        }
      return false;
  }
}


