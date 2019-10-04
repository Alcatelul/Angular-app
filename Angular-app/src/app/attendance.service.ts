import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AttendanceService {

  constructor() { }
  attend(id: String):void{
    for(let ore of environment.courses)
    {
        for(let student of environment.users){
          if(student.username==environment.actualUser && ore.id==id){
            student.attendance.push(id.toString());
          }
        }
    }
    for(let ore of environment.laboratories)
    {
        for(let student of environment.users){
          if(student.username==environment.actualUser && ore.id==id){
            student.attendance.push(id.toString());
          }
        }
    }
  }
}
