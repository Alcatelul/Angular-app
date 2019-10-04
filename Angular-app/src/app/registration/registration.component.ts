import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[
            
  ]
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,private register:RegisterService) { }
 booll:boolean;
  ngOnInit() {

  }
  functie(name,username,surname,email,password,id,attendance):void
{
  this.booll=this.register.fbPostData(name,username,surname,email,password,id,attendance);
  if(this.booll==true)
    {this.router.navigateByUrl('/users');
    alert("Se conecteaza!");}
    else
    {
      alert("Contul nu exista!");
    }
  

}

}
