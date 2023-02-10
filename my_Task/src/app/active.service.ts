import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveService implements CanActivate {
  login: boolean = false;

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.login) {
      return true
    }
    else {
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
