import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.scss']
})
export class ExpertDetailComponent implements OnInit {
  expert;
  constructor( private router: Router) {this.expert= this.router?.getCurrentNavigation().extras.state.expert;
  }

  ngOnInit(): void {
    console.log(this.expert)
  }

}
