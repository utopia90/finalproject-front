import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-remarks',
  templateUrl: './expert-remarks.component.html',
  styleUrls: ['./expert-remarks.component.scss']
})
export class ExpertRemarksComponent implements OnInit {

  reasons = [{value: 'bajo rendimiento'}, {value:'sin disponibilidad'}, {value:'otros'}];


  constructor() { }

  ngOnInit(): void {
  }

}
