import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-back',
  templateUrl: './toolbar-back.component.html',
  styleUrls: ['./toolbar-back.component.scss']
})
export class ToolbarBackComponent implements OnInit {
  @Input()expert=false;
  @Input()tag=false;

  constructor() { }

  ngOnInit(): void {
  }

}
