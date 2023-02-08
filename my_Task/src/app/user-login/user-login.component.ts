import { Component } from '@angular/core';
import {ReactiveFormsModule,FormControl,FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  credentialsData:any=[]
  constructor( public http:HttpClient,private route:Router){ 
    this.readingJSONdata()
  }
  readingJSONdata(){
    this.http.get("assets/data/credentials.json").subscribe((data)=>{
      this.credentialsData = data
    })
    }
  userLogin=new FormGroup({
    user_name: new FormControl("",[Validators.required]),
    password: new FormControl("", [Validators.required])
  })
  get user_name() {
    return this.userLogin.get('user_name')
  }
  get password() {
    return this.userLogin.get('password')
  }
  userLoggedin(){
    if(this.userLogin.status === "INVALID"){
      Swal.fire({
        icon: 'error',
        title:'Please fill User name and Password'
      })
    }
    console.log(this.credentialsData);

    for(let i=0 ;i<this.credentialsData.length;i++){
        if(this.userLogin.get("user_name")?.value === this.credentialsData[i].user1){
            if( this.userLogin.get("password")?.value === this.credentialsData[i].password ){
              console.log(this.credentialsData[i].user1);
              console.log(this.credentialsData[i].password);
              Swal.fire({
                icon:'success',
                title:"Login Success"
              })
              this.route.navigate(['youtube'])
            }
            break
        }
        else{
          Swal.fire({
            icon:'warning',
            title:"Login Credentials are not matched",
            text:"Seems You mised something"
          })
        }
    }
    
    

    
  }



}
