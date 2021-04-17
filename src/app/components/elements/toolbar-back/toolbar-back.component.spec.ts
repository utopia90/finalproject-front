import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBackComponent } from './toolbar-back.component';

describe('ToolbarBackComponent', () => {
  let component: ToolbarBackComponent;
  let fixture: ComponentFixture<ToolbarBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
