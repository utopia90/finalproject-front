import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-lists',
  templateUrl: './toolbar-lists.component.html',
  styleUrls: ['./toolbar-lists.component.scss'],
})
export class ToolbarListsComponent implements OnInit {
  @Input() listName;
  @Input() expert = false;
  @Input() tag = false;
  @Input() length;

  constructor() {}

  ngOnInit(): void {}
}
