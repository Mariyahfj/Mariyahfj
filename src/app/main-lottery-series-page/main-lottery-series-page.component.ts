import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../app.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-main-lottery-series-page',
  templateUrl: './main-lottery-series-page.component.html',
  styleUrls: ['./main-lottery-series-page.component.scss']
})

export class MainLotterySeriesPageComponent implements OnInit {
  
  isCheckAll = false;
  colClicked = false;
  rowClicked = true;
  totalQuantity: number =0;
  totalPoints: number=0;
  selectedPoints: number=2;
  finalQuantity: number;
  finalPoints: number;
  selectedTickets = [{ticketNumbers:'', quantity:''}]
  object = { 
    "delhi" : 
      { 
         "cityCode" : "1000 - 1099",
         "pts" : "Pts 2*1",
         "number":"2",
         "classname":"delhiCity",
         "bgColor":"#226f87",
         "checked":true,
         "ptsSelected":true
      },
      "mumbai" : 
      { 
         "cityCode" : "1100 - 1199",
         "pts" : "Pts 2*1",
         "number":"3",
         "classname":"mumbaiCity",
         "bgColor":"#948195",
         "checked":false,
         "ptsSelected":false
      },
      "surat" : 
      { 
         "cityCode" : "1200 - 1299",
         "pts" : "Pts 2*1",
         "number":"5",
         "classname":"suratCity",
         "bgColor":"#d8e3e5",
         "checked":false,
         "ptsSelected":false
      },
      "panji" : 
      { 
         "cityCode" : "1300 - 1399",
         "pts" : "Pts 2*1",
         "number":"25",
         "classname":"panjiCity",
         "bgColor":"#c6c7ca",
         "checked":false,
         "ptsSelected":false
      },
      "jaipur" : 
      { 
         "cityCode" : "1400 - 1499",
         "pts" : "Pts 2*1",
         "number":"50",
         "classname":"jaipurCity",
         "bgColor":"#c3b3ab",
         "checked":false,
         "ptsSelected":false
      },
      "chenn" : 
      { 
         "cityCode" : "1500 - 1599",
         "pts" : "Pts 2*1",
         "number":"60",
         "classname":"chennCity",
         "bgColor":"#d3a697",
         "checked":false,
         "ptsSelected":false
      },
      "ranchi" : 
      { 
         "cityCode" : "1600 - 1699",
         "pts" : "Pts 2*1",
         "number":"70",
         "classname":"ranchiCity",
         "bgColor":"#c5c7ce",
         "checked":false,
         "ptsSelected":false
      },
      "kokta" : 
      { 
         "cityCode" : "1700 - 1799",
         "pts" : "Pts 2*1",
         "number":"80",
         "classname":"koktaCity",
         "bgColor":"#c1b58c",
         "checked":false,
         "ptsSelected":false
      },
      "bhopa" : 
      { 
         "cityCode" : "1800 - 1899",
         "pts" : "Pts 2*1",
         "number":"90",
         "classname":"bhopaCity",
         "bgColor":"#e1dad2",
         "checked":false,
         "ptsSelected":false
      },
      "indore" : 
      { 
         "cityCode" : "1900 - 1999",
         "pts" : "Pts 2*1",
         "number":"100",
         "classname":"indoreCity",
         "bgColor":"#c2c8cc",
         "checked":false,
         "ptsSelected":false
      }
  }  

items = [
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''},
{ colVal: '', rowVal: ''}];
inputArray = [
{ value: '' },
{ value: '' },
{ value: '' },
{ value: '' },
{ value: '' },
{ value: '' },
{ value: '' },
{ value: '' },
{ value: ''},
{ value: ''}
]
value: number;
  seriesItems =[1,2,3,4,5,6,7,8,9,10,11];
  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
     this.utilityService.generateNumberSeries(1000);
     this.utilityService.generateNumberSeries(this.utilityService.minRowSeries, 'rowSeries');     
     this.checkedRadioBtn(this.object.delhi,0);
     this.utilityService.setObjectRowSeries();
     this.object = this.utilityService.object;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  getBgColor(key) {
    return key.bgColor;
  }

  onKey(event: any, i: number, param) { 
     if(param === 'colClicked') {
        this.colClicked = true; this.rowClicked = false;
        this.items[i].colVal = event.target.value;        
     } else if(param === 'rowClicked') {
        this.colClicked = false; this.rowClicked = true;
        for(let k=0; k<this.items.length; k++) {
           this.items[k].rowVal = event.target.value;
        }
        
     }    
  }

   selectAllPoints() {
      if (this.isCheckAll) {
         for (const property in this.object) {
            this.object[property].ptsSelected = true;
         }
      } else {
         for (const property in this.object) {
            this.object[property].ptsSelected = false;
         }
      }

   }

   checkedRadioBtn(obj, index) {
   this.selectedPoints = obj.number;
      for (const property in this.object) {
         this.object[property].pts = "Pts "+obj.number;
      }
   }

   calculateQuantityAndPrice(event, i, param?) {          
      let total = 0;
      let inVal = event.target.value;
      if(param === 'allInput') {
         inVal = +inVal*10;
      }
      this.utilityService.numSeriesArray[param][i].inputNum = inVal;
      console.log(this.utilityService.numSeriesArray);
      this.inputArray[i].value = inVal;      
      for(let j=0;j<this.inputArray.length;j++) {
         if(this.inputArray[j].value !== "") {
            total += +this.inputArray[j].value;
         }
      }      
      this.totalQuantity = total;
      this.totalPoints = this.totalQuantity*this.selectedPoints;
      this.finalQuantity = this.totalQuantity;
      this.finalPoints = this.totalPoints;
   }

   genRowSeries(event){
      alert(event.target.id);
   }
}

