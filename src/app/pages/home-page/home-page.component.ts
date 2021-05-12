import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, UrlSegmentGroup } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  authSubscription: Subscription = new Subscription();
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var logged = sessionStorage.getItem('loggedIn');
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
    });
  }

  login() {
    if (
      this.loginForm.value.email &&
      this.loginForm.value.password
    ) {
      this.authSubscription = this.authService
        .login(this.loginForm.value)
        .subscribe((response) => {
          console.log(response);
          if (response) {
            console.log('login con éxito');
            this.authService.setLoggedIn(true);
            this.router.navigate(['/experts']);
          } else {
            alert('Error: No Token Received');
            this.authService.setLoggedIn(false);
          }
        });
    }
  }
}
