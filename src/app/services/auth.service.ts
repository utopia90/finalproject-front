import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

   isLoggedIn = false;

  constructor(private http: HttpClient, private router:Router) { }

  /**
   * Login for our Contact App
   * @param user User that's login in
   * @return Observable<boolean>
   */

  /**
   * Login with real HTTP Request
   * @return Observable<any>
   */
  login(user){
    if(user.mail == "admin" && user.password == "admin"){
      this.setLoggedIn(true);
      sessionStorage.setItem("loggedIn", JSON.stringify(true))
    }
  }

  getloggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }


}
