import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpertsService } from './../../services/experts.service';

@Component({
  selector: 'app-create-expert',
  templateUrl: './create-expert.component.html',
  styleUrls: ['./create-expert.component.scss'],
})
export class CreateExpertComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  expert = true;
  state = [{ value: 'validado' }, { value: 'por validar' }];
  rating = [
    { value: '15' },
    { value: '25' },
    { value: '55' },
    { value: '75' },
    { value: '100' },
  ];
  availability = [{ value: 'mañana' }, { value: 'tarde' }];
  tagsContainer = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private expertService: ExpertsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
      surname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),
      ],
      mail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      ],
      linkedln: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      phone: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      address: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      dni: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      tags: this.formBuilder.array([]),
      state: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      rating: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(3)]),
      ],
      availability: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
    });
  }
  get tagsArray(): FormArray {
    return this.formGroup.get('tags') as FormArray;
  }

  addTag() {
    let tags = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
        ]),
      ],
    });
    console.log(tags);
    this.tagsArray.push(tags);
  }

  removeTag(index: number) {
    this.tagsArray.removeAt(index);
  }

  submitRegisterForm() {
    if (
      this.formGroup.value.name &&
      this.formGroup.value.surname &&
      this.formGroup.value.phone &&
      this.formGroup.value.mail &&
      this.formGroup.value.mail.match(
        '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
      ) &&
      this.formGroup.value.rating &&
      this.formGroup.value.dni &&
      this.formGroup.value.linkedln &&
      this.tagsArray.value.length >= 1 &&
      this.formGroup.value.availability
    ) {
      this.expertService
        .register(this.formGroup.value)
        .subscribe((response) => {
          if (response) {
            alert(`registro con exito`);
          } else {
            alert('Error: No Token Received');
          }
        });
    } else {
      alert('por favor, rellene todos los campos correctamente');
    }
  }
}
