import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCitiesComponent } from './side-bar-cities.component';

describe('SideBarCitiesComponent', () => {
  let component: SideBarCitiesComponent;
  let fixture: ComponentFixture<SideBarCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
