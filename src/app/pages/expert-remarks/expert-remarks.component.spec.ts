import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertRemarksComponent } from './expert-remarks.component';

describe('ExpertRemarksComponent', () => {
  let component: ExpertRemarksComponent;
  let fixture: ComponentFixture<ExpertRemarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertRemarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
