import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './dash-board/dash-board.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveService } from './active.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
const myNavigation: Routes = [
  {
    path: '', component: UserLoginComponent
  },
  {
    path: 'login', component: UserLoginComponent
  },
  {
    path: 'myVideos', component: DashBoardComponent, canActivate: [ActiveService]
  },
  {
    path: '**', component: UserLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashBoardComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myNavigation),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],

  providers: [ActiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
