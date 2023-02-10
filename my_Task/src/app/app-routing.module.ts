import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveService } from './active.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes =  [
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
  imports: [RouterModule.forRoot(routes),
    ModalModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
