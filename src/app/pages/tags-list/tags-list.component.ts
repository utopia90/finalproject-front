import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss'],
})
export class TagsListComponent implements OnInit {
  listName = 'etiquetas';
  tag = true;
  length;

  constructor() {}

  ngOnInit(): void {
    this.length = localStorage.getItem('tagLength');
  }
}
