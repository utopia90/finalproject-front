import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {
  listName="expertos";
  expert=true;
  length;

  
  constructor() { }

  ngOnInit(): void {
     this.length = localStorage.getItem('length')
  }

}
