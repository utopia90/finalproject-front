import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ExpertsService} from './../../services/experts.service';


@Component({
  selector: 'app-create-expert',
  templateUrl: './create-expert.component.html',
  styleUrls: ['./create-expert.component.scss']
})
export class CreateExpertComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  expert=true;

  constructor(private formBuilder: FormBuilder,private router: Router, private expertService: ExpertsService) { }

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      surname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      linkedln: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      phone:  ['', Validators.compose([Validators.required, Validators.minLength(5)])], 
      address:  ['', Validators.compose([Validators.required, Validators.minLength(5)])], 
      dni:  ['', Validators.compose([Validators.required, Validators.minLength(5)])], 
      state:  ['', Validators.compose([Validators.required, Validators.minLength(5)])], 
      rating:  ['', Validators.compose([Validators.required, Validators.maxLength(3)])], 
      availability:  ['', Validators.compose([Validators.required, Validators.minLength(2)])], 
    });
  }

  submitRegisterForm(){
     this.expertService.register(this.formGroup.value).subscribe((response) => {
      if(response){
       alert(`registro con exito`);
       }else{
        alert('Error: No Token Received');
      }
     })
  }
}
