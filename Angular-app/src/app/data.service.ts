import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/Http/src/static_response';


@Injectable()
export class DataService {

  constructor (private http: Http) { }

  fetchData(){
    return this.http.get('https://project-awj.firebaseio.com/.json').map(
      (res) =>res.json()
      
  );
  }
}
