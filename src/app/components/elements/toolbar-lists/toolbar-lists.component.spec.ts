import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarListsComponent } from './toolbar-lists.component';

describe('ToolbarListsComponent', () => {
  let component: ToolbarListsComponent;
  let fixture: ComponentFixture<ToolbarListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
