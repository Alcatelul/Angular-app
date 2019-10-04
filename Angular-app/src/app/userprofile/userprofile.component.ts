import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userii:any=[];
  actual_user_2:any="";

  constructor(private user_profile: UserService ) {
  this.userii=user_profile.useri;
  //this.actual_user_2=user_profile.actual_user; //nu pot sa iau de pe server userul actual,
                                                //asa ca l-am luat tot din environment

    

  }

  ngOnInit() {this.actual_user_2=this.user_profile.us_act();
    
  
  }

}
