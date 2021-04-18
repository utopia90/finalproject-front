import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  show=false;
  home;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    })

   
  

}
submitLoginForm(){
  console.log("login!" + this.loginForm.value )
}
}
