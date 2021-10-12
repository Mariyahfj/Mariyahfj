import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotterySelcectedNumbersComponent } from './lottery-selcected-numbers.component';

describe('LotterySelcectedNumbersComponent', () => {
  let component: LotterySelcectedNumbersComponent;
  let fixture: ComponentFixture<LotterySelcectedNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotterySelcectedNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotterySelcectedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
