import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from '../environments/environment';
declare var firebase: any

@Injectable()
export class RegisterService {
  router: any;

  constructor() { 
  
  }
  fbPostData(name,username,surname,email,password,id,attendance):boolean{
    
    firebase.database().ref('/users/').push({name:name,username:username,surname:surname,email:email,password:password,id:id,attendance:attendance})
  return true;
  }


}



