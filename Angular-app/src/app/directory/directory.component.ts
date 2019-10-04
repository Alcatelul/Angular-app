import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  userul:any="";
  
  constructor(private user_profile: UserService) { 


    
  }

  ngOnInit() {
  }
 


}
