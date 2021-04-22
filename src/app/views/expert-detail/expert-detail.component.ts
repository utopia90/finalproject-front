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
  availability = [{value: 'mañana'}, {value:'tarde'}];
  state = [{value: 'validado'},{ value: 'por validar'}];
  rating = [{value: '15'},{ value: '25'},{ value: '55'},{ value: '75'},{ value: '100'}];





  constructor(private formBuilder: FormBuilder,private router: Router, private expertService: ExpertsService) {this.expert= this.router?.getCurrentNavigation().extras.state.expert;
  }


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      tags: this.formBuilder.array([]),
      availability:  ['', Validators.compose([Validators.required, Validators.minLength(2)])], 
      state:  ['', Validators.compose([Validators.required, Validators.minLength(5)])], 
      rating:  ['', Validators.compose([Validators.required, Validators.maxLength(3)])]
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
     
    if(this.formGroup.value.tags[0].name.length > 0){
     this.expert.tags.push(this.formGroup.value.tags[0].name)
    
      this.expertService.updateExpert(this.expert).subscribe((response) => {
      if(response){
      alert('etiqueta añadida con exito');
        }else{
        alert('Error: No hemos recibido etiqueta');
       }
      }

      )}
    }

    updateState(){
      this.expert.state = this.formGroup.value.state;

      this.expertService.updateExpert(this.expert).subscribe((response) => {
        if(response){
        alert('estado actualizado con exito');
          }else{
          alert('Error: No hemos recibido estado');
         }
        }
      )}
    updateRating(){
      this.expert.rating = this.formGroup.value.rating;

      this.expertService.updateExpert(this.expert).subscribe((response) => {
        if(response){
        alert('puntuación actualizada con exito');
          }else{
          alert('Error: No hemos recibido puntuación');
         }
        }
      )
    }
    updateAvailability(){
      this.expert.availability = this.formGroup.value.availability;

      this.expertService.updateExpert(this.expert).subscribe((response) => {
        if(response){
        alert('disponibilidad actualizada con exito');
          }else{
          alert('Error: No hemos recibido disponibilidad');
         }
        }
      )
    }
    removeTag(index: number) {
      this.tagsArray.removeAt(index);
    }
  
    }
 


