import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AttendanceService } from '../attendance.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  actual_user:String=environment.actualUser;
  actual_id:String;
  cursuri:Array<{name: string, dates: Array<{day: string, hour: number }>,groups: Array<String>, id: string}>=[];
  laboratoare:Array<{name: string, dates: Array<{day: string, hour: number }>,groups: Array<String>, id: string}>=[];
  l1:number=0;
  l2:number=0;
  constructor(private attendance: AttendanceService) { }

  ngOnInit() {for(let user of environment.users){
    if(this.actual_user==user.username)
      this.actual_id=user.id;
  }
  for(let curs of environment.courses){
    for(let id of curs.groups){
      if(this.actual_id==id){
        this.l1++;
        this.cursuri.push(curs);
      }
    }
  }
  for(let lab of environment.laboratories){
    for(let id of lab.groups){
      if(this.actual_id==id){
        this.l2++;
        this.laboratoare.push(lab);
      }
    }
  }
  }
  attendance_c(cursul:String,hour:number,day:String):void{
    var date =new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[date.getDay()];
    if((date.getHours()==(hour/100) || (date.getHours()+1)==(hour/100)) && (n==day)){
 //     alert(n+" "+day);
      this.attendance.attend(cursul)
    }else alert("Cursul nu are loc la aceast ora sau astazi! "+date.getHours()+" "+(hour/100)+n+" "+day);
  return;
}

attendance_l(laboratorul:String,hour:number,day:String):boolean{
  var date =new Date();
  var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[date.getDay()];
  if((date.getHours()==(hour/100) || (date.getHours()+1)==(hour/100)) && (n==day)){
  //  alert(n+" "+day);
    this.attendance.attend(laboratorul);
  }else alert("Laboratorul nu are loc la aceast ora sau astazi! "+date.getHours()+" "+(hour/100)+n+" "+day);
  return true;
}


}
