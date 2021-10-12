import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCheckboxesComponent } from './action-checkboxes.component';

describe('ActionCheckboxesComponent', () => {
  let component: ActionCheckboxesComponent;
  let fixture: ComponentFixture<ActionCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
