import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-selcected-numbers',
  templateUrl: './lottery-selcected-numbers.component.html',
  styleUrls: ['./lottery-selcected-numbers.component.scss']
})
export class LotterySelcectedNumbersComponent implements OnInit {

  selectedCitiesNumArray = [{
    delhi:[3009],
    mumbai:[3146],
    surat:[3288],
    panji:[3321],
    jaipur:[3488],
    chenn:[3521],
    ranchi:[3602],
    kolkta:[3705],
    bhopa:[3873],
    indore:[3945]
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
