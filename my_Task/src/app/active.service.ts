import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveService implements CanActivate {
  login: boolean = false;

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let res=sessionStorage.getItem('loginRes');
    if (res) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
      return false
    }
  }
  loggedIn(loginValue: boolean) {
    this.login = loginValue
  }
  logout(logOutValue: boolean) {
    this.login = logOutValue

  }
}
