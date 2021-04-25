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
  @Output() isLoggedIn = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    var logged = sessionStorage.getItem("loggedIn")
    console.log(logged)

    window.alert(
      'Para loguearse, tienes que introducir el correo: admin, y en password: admin'
    );
    this.loginForm = this.formBuilder.group({
      mail: [
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
    if (this.loginForm.value.mail && this.loginForm.value.password) {
      this.authService.login(this.loginForm.value);
      if (this.authService.getloggedIn()) {
        this.router.navigate(['/experts']);
        this.isLoggedIn.emit(true);
      }
    } else {
      alert('Error: No Token Received');
      this.router.navigate(['/home']);
      this.isLoggedIn.emit(false);
    }
  }
}
