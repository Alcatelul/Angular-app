import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
declare var firebase: any

@Injectable()
export class UserService {
  useri:any=[];
  actual_user:any="";
  
    constructor() {
     this.fbGetData1();
     this.fbGetData2();
  }

  fbGetData1(){
    firebase.database().ref('/users').on('child_added',(snapshot)=>
    {this.useri.push(snapshot.val())
    })}
    fbGetData2(){
      firebase.database().ref('/act/').on('child_added',(snapshot)=>
      {this.actual_user.push(snapshot.val())
      })
   }

    us_act():any{
     
          return  environment.actualUser;
      }
    }
