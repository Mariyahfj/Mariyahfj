import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  allSeriesArray = [{}];
  series = 'T0';
  numSeriesArray = {
    col0 : [],
    col1 : [],
    col2 : [],
    col3 : [],
    col4 : [],
    col5 : [],
    col6 : [],
    col7 : [],
    col8 : [],
    col9 : [],  };
  
  rowSeriesArray ={
    row0 : [],
    row1 : [],
    row2 : [],
    row3 : [],
    row4 : [],
    row5 : [],
    row6 : [],
    row7 : [],
    row8 : [],
    row9 : []
  };
  
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
  minRowSeries = 0;
  maxRowSeries = 0;

  constructor() { }  

  generateNumberSeries(selectedNum, param?) {
    let min=selectedNum; 
    let max = min+99;
    this.minRowSeries = min;
    this.maxRowSeries = max;
  //   if(selectedNum === 0) {
  //     min = 0000;
  //     max = 0099;
  //  }
  if(param !== 'rowSeries')
  this.numSeriesArray ={
    col0 : [],
    col1 : [],
    col2 : [],
    col3 : [],
    col4 : [],
    col5 : [],
    col6 : [],
    col7 : [],
    col8 : [],
    col9 : [],  };
  
  if(param == 'rowSeries')
  this.rowSeriesArray ={
    row0 : [],
    row1 : [],
    row2 : [],
    row3 : [],
    row4 : [],
    row5 : [],
    row6 : [],
    row7 : [],
    row8 : [],
    row9 : []
  };
  
  let firstDigit = this.firstDigit(min);  
  let series = 'T'+firstDigit;
  let obj = {series: {}}
    let size: number = 0;
    for (let i = min; i <= max; i++) {
      size++;
      let switchSize = Math.ceil(size / 10 );     
      switch (switchSize) {
        case 1: 
          if(param === 'rowSeries') {
            this.rowSeriesArray.row0.push({seriesNum:i, inputNum:''})
          } else {            
            this.numSeriesArray.col0.push({seriesNum:i, inputNum:''})
            if(this.numSeriesArray.col0.length >=10){
              this.minRowSeries = this.numSeriesArray.col0[0].seriesNum;
            } 
          }                  
          break;
        case 2:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row1.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col1.push({seriesNum:i, inputNum:''})
            break;
          }
        case 3:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row2.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col2.push({seriesNum:i, inputNum:''})
            break;
          }
        case 4:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row3.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col3.push({seriesNum:i, inputNum:''})
            break;
          }
        case 5:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row4.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col4.push({seriesNum:i, inputNum:''})
            break;
          }
        case 6:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row5.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col5.push({seriesNum:i, inputNum:''})
            break;
          }
        case 7:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row6.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col6.push({seriesNum:i, inputNum:''})
            break;
          }
        case 8:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row7.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col7.push({seriesNum:i, inputNum:''})
            break;
          }
        case 9:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row8.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col8.push({seriesNum:i, inputNum:''})
            break;
          }
        case 10:
          if(param === 'rowSeries') {
            this.rowSeriesArray.row9.push({seriesNum:i, inputNum:''})
          } else {
            this.numSeriesArray.col9.push({seriesNum:i, inputNum:''})
              if(this.numSeriesArray.col9.length >=10){            
                this.maxRowSeries = this.numSeriesArray.col9[9].seriesNum;
              }
          }
          break;
        default:
          break;
      }
    }   
    if (this.allSeriesArray[series] === undefined || this.allSeriesArray[series].length === 0) {
      obj = { series: this.numSeriesArray } //key: value
      obj[series] = obj.series // on object create new key name. Assign old value to this
      delete obj.series //delete object with old key name
      this.allSeriesArray.push(obj);
    }
  }

  firstDigit(n) {
    // Remove last digit from number
    // till only one digit is left
    while (n >= 10)
      n /= 10;

    // return the first digit
    return Math.floor(n);
  }

  setObjectRowSeries() {
    let self = this;
    let min = self.minRowSeries;
    let max = self.maxRowSeries;
    _.forEach(this.object, function(value) {
       value.cityCode = min+' - '+max;
       min +=100;max +=100;
     });      
 }
}
