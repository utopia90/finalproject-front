import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params, Route, ParamMap} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalproject-front';
  show = true;
  
  

  constructor(   private router: Router) {
}
 ngOnInit(): void {
  let currentLocation = window.location.href;

  if (currentLocation.includes('home')){
    this.show = false;
    console.log(this.show)
  }

}}
