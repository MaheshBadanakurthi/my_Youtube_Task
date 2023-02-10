import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActiveService } from '../active.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private activeServ: ActiveService, private route: Router) { }
  logout() {
    this.activeServ.logout(false);
    Swal.fire({
      icon: "success",
      title: "LogOut Succesfully",
      timerProgressBar: true,
      timer: 1500
    })
    this.route.navigate(['login'])
  }
}
