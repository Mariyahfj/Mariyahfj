import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../app.service';

@Component({
  selector: 'app-main-lottery-series-page',
  templateUrl: './main-lottery-series-page.component.html',
  styleUrls: ['./main-lottery-series-page.component.scss']
})

export class MainLotterySeriesPageComponent implements OnInit {
  
  isCheckAll = false;
  object = { 
    "delhi" : 
      { 
         "cityCode" : "30 - DELHI",
         "pts" : "Pts 2*1",
         "number":"2",
         "classname":"delhiCity",
         "bgColor":"#226f87"
      },
      "mumbai" : 
      { 
         "cityCode" : "31 - MUMBAI",
         "pts" : "Pts 2*1",
         "number":"3",
         "classname":"mumbaiCity",
         "bgColor":"#948195"
      },
      "surat" : 
      { 
         "cityCode" : "32 - SURAT",
         "pts" : "Pts 2*1",
         "number":"5",
         "classname":"suratCity",
         "bgColor":"#d8e3e5"
      },
      "panji" : 
      { 
         "cityCode" : "33 - PANJI",
         "pts" : "Pts 2*1",
         "number":"25",
         "classname":"panjiCity",
         "bgColor":"#c6c7ca"
      },
      "jaipur" : 
      { 
         "cityCode" : "34 - JAIPUR",
         "pts" : "Pts 2*1",
         "number":"50",
         "classname":"jaipurCity",
         "bgColor":"#c3b3ab"
      },
      "chenn" : 
      { 
         "cityCode" : "35 - CHENN",
         "pts" : "Pts 2*1",
         "number":"60",
         "classname":"chennCity",
         "bgColor":"#d3a697"
      },
      "ranchi" : 
      { 
         "cityCode" : "36 - RANCHI",
         "pts" : "Pts 2*1",
         "number":"70",
         "classname":"ranchiCity",
         "bgColor":"#c5c7ce"
      },
      "kokta" : 
      { 
         "cityCode" : "37 -KOLKATA",
         "pts" : "Pts 2*1",
         "number":"80",
         "classname":"koktaCity",
         "bgColor":"#c1b58c"
      },
      "bhopa" : 
      { 
         "cityCode" : "38 - BHOPA",
         "pts" : "Pts 2*1",
         "number":"90",
         "classname":"bhopaCity",
         "bgColor":"#e1dad2"
      },
      "indore" : 
      { 
         "cityCode" : "38 - Indore",
         "pts" : "Pts 2*1",
         "number":"100",
         "classname":"indoreCity",
         "bgColor":"#c2c8cc"
      }
  }
  
//   items = [1,2,3,4,5,6,7,8,9,10];
items = [{ value: ''},{ value: ''},{ value: ''},{ value: ''},{ value: ''},{ value: ''},{ value: ''},{ value: ''},{ value: ''},{ value: ''},{ value: ''}];
value: number;
  seriesItems =[1,2,3,4,5,6,7,8,9,10,11];
  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
     this.utilityService.generateNumberSeries(0);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  getBgColor(key) {
    return key.bgColor;
  }

  getInputValue(i) {
      // alert(this.items[i].value)
  }

}

