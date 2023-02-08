import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { Routes,RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './dash-board/dash-board.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const myNavigation:Routes=[
  {
   path:'login',component:UserLoginComponent
  },
  {
    path:'youtube',component:DashBoardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashBoardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myNavigation),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
    
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
