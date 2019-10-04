import { Component } from '@angular/core';
import{LoginComponent} from './login/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'app woop woop';
  name = 'tare';
  ninja='ninjalau';

  yell(e){
    alert("I am yelling!");
  }
}
