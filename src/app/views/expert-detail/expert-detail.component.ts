import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpertsService } from 'src/app/services/experts.service';


@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.scss']
})
export class ExpertDetailComponent implements OnInit {
  expert;
  formGroup: FormGroup = new FormGroup({})



  constructor( private formBuilder: FormBuilder,private router: Router, private expertService: ExpertsService) {this.expert= this.router?.getCurrentNavigation().extras.state.expert;
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      tags: this.formBuilder.array([])

    });



  }
  get tagsArray(): FormArray{
    return this.formGroup.get('tags') as FormArray
  }

  addTag() {

    const tags = this.formBuilder.group(
      {
        name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)])]
      }
    );
    this.tagsArray.push(tags);
     
     this.expert.tags.push(this.tagsArray)
      console.log(this.expert)
      this.expertService.updateExpert(this.expert).subscribe((response) => {
      if(response){
      alert('etiqueta añadida con exito');
        }else{
        alert('Error: No Token Received');
       }
      }


    )}

    removeTag(index: number) {
      this.tagsArray.removeAt(index);
    }
  
    }
 


