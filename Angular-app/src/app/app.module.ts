import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DirectoryComponent } from './directory/directory.component';
import {RouterModule , Routes} from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RequestOptions } from '@angular/http/src/base_request_options';

import { UsersComponent } from './users/users.component';
import { DataService } from './data.service';
import { LoginService } from './login.service';
import {RegisterService} from'./register.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UserService } from './user.service';
import { AttendanceService } from './attendance.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirectoryComponent,
    RegistrationComponent,
    UsersComponent,
    UserprofileComponent,
    AttendanceComponent

 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'directory',component:DirectoryComponent},
      {path:'registration',component:RegistrationComponent},
      {path:'users',component:UsersComponent},
      {path:'userprofile',component:UserprofileComponent},
      {path:'attendance',component:AttendanceComponent}
    
  ])
  ],
  providers: [DataService,LoginService,RegisterService,UserService,AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
