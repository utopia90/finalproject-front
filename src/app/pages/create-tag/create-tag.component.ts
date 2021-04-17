import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ExpertsService} from './../../services/experts.service';


@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent implements OnInit {
  tag=true;
  formGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private tagService: TagsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
  })

}
submitRegisterForm(){
  this.tagService.register(this.formGroup.value).subscribe((response) => {
   if(response){
    alert(`registro con exito`);
    }else{
     alert('Error: No Token Received');
   }
  })
}

}
