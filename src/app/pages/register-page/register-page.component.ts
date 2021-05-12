import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, UrlSegmentGroup } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  authSubscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private mailService: EmailServiceService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      surname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      name: ['', Validators.required],
    });
  }

  register() {
    if (
      this.registerForm.value.email.match(
        '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
      ) &&
      this.registerForm.value.surname &&
      this.registerForm.value.password &&
      this.registerForm.value.name
    ) {
      this.authService.register(this.registerForm.value).subscribe(
        (res) => {
          alert('registro realizado con éxito!');
          this.mailService
          .sendConfirmationRegisterMail(this.registerForm.value)
          .subscribe(
            (res) => {
              alert(
                'compruebe su bandeja de entrada, le hemos enviado un email de confirmación'
              );
            },
            (err) => {
              alert('se produjo un error al enviar un email de confirmación');
            }
          );
        },
        (err) => {
          alert('el email ya se encuentra en nuestra base de datos');
        }
      );
    } else {
      alert('por favor, rellene todos los campos correctamente');
    }

   
  }
}
