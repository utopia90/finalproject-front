import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Login for our Contact App
   * @param user User that's login
   * @return Observable<boolean>
   */

  /**
   * Login with real HTTP Request
   * @return Observable<any>
   */
  login(loginForm: any): Observable<any> {
    let body = {
      email: loginForm.email,
      password: loginForm.password,
    };
    

    return this.http.post(
      'https://serene-wave-12377.herokuapp.com/api/login',
      body,  { responseType: 'text' })
  }

  register(registerForm: any): Observable<any> {
    let body = {
      email: registerForm.email,
      password: registerForm.password,
      name: registerForm.name,
      surname: registerForm.surname,
    };
   

    return this.http.post(
      'https://serene-wave-12377.herokuapp.com/api/register',
      body)
  }

  getloggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
