import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'
import userCredentialData from "../../assets/data/credentials.json"
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActiveService } from '../active.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  credentialsData: { id: number, user1: string, user2: string, password: string}[]=userCredentialData
  constructor( private route: Router, private activeServ: ActiveService) { }
  userLogin = new FormGroup({
    user_name: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })
  get user_name() {
    return this.userLogin.get('user_name');
  }
  get password() {
    return this.userLogin.get('password');
  }
  userLoggedin() {
    for (let i = 0; i < this.credentialsData.length; i++) {
      if (this.userLogin.get("user_name")?.value === this.credentialsData[i].user1) {
        if (this.userLogin.get("password")?.value === this.credentialsData[i].password) {
          this.activeServ.loggedIn(true)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Success',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500
          })
          this.userLogin.reset()
          this.route.navigate(['myVideos'])
        }
        else {
          Swal.fire({
            icon: 'warning',
            title: 'Enter Valid Password',
            timerProgressBar: true,
            timer: 1500
          })
        }
        break;
      }
      else {
        Swal.fire({
          icon: 'warning',
          title: "Invalid User name",
        })
      }
    }
  }

}
