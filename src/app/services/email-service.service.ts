import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient, private router: Router) { }


  sendConfirmationRegisterMail(registerForm: any): Observable<any> {
    let body = {
      emailAddress: registerForm.email,
      emailContact: registerForm.name,
      emailMessage: ""
    };
    
    console.log(body)

    return this.http.post(
      'https://serene-wave-12377.herokuapp.com/api/registration-email',
      body)
  }

}
