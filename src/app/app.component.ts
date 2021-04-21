import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params, Route, ParamMap, Event} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalproject-front';
  logged:boolean;

  

  constructor(){}

 ngOnInit() {

}
isLoggedIn($e){
  this.logged = $e;

}
}
