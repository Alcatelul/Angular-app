import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
declare var firebase: any


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']


})
export class UsersComponent implements OnInit {
useri=[];
datele=JSON.stringify(this.useri);
complexProp= [
  {InnerProp: "test1"},
  {InnerProp: "test2"}
];
simple=1;
  constructor(private newService: DataService) { }

  ngOnInit() {
    /*this.newService.fetchData().subscribe(
      (data)=>this.useri =data
    );*/
    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/users/').on('child_added',(snapshot) =>
    {this.useri.push(snapshot.val())
    })
  }

fbPostData(name,username,surname,email,password,id,attendance){
  firebase.database().ref('/users').push({name:name,username:username,surname:surname,email:email,password:password,id:id,attendance:attendance})
}


}
