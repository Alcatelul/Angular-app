import { Component,Output,Input, OnInit,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';
import {LoginService} from '../login.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useri=[];
hometitle = "Welcome to the login page!";
@Input() users;
numex:boolean=false;
  constructor(private router:Router,private login: LoginService,private newService: DataService) { }
  

  ngOnInit() {
  
  }
  
functie(e:any):void
{
  this.numex=this.login.loginUser(e);
  if(this.numex==true)
    {this.router.navigateByUrl('/directory');
    alert("Se conecteaza!");}
    else
    {
      alert("Contul nu exista!");
    }
  

}
}
