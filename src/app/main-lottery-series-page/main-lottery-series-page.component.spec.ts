import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLotterySeriesPageComponent } from './main-lottery-series-page.component';

describe('MainLotterySeriesPageComponent', () => {
  let component: MainLotterySeriesPageComponent;
  let fixture: ComponentFixture<MainLotterySeriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLotterySeriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLotterySeriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
