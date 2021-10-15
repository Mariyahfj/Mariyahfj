import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
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
    col9 : [],
  };

  constructor() { }  

  generateNumberSeries(selectedNum) {
    let min=selectedNum; 
    let max = min+99;
  //   if(selectedNum === 0) {
  //     min = 0000;
  //     max = 0099;
  //  }
  this.numSeriesArray ={
    col0 : [-1],
    col1 : [-1],
    col2 : [-1],
    col3 : [-1],
    col4 : [-1],
    col5 : [-1],
    col6 : [-1],
    col7 : [-1],
    col8 : [-1],
    col9 : [-1],
  };
    let size: number = 0;
    for (let i = min; i <= max; i++) {
      size++;
      let switchSize = Math.ceil(size / 10 );     
      switch (switchSize) {
        case 1:          
            this.numSeriesArray.col0.push(i)
          break;
        case 2:
          this.numSeriesArray.col1.push(i)
          break;
        case 3:
          this.numSeriesArray.col2.push(i)
          break;
        case 4:
          this.numSeriesArray.col3.push(i)
          break;
        case 5:
          this.numSeriesArray.col4.push(i)
          break;
        case 6:
          this.numSeriesArray.col5.push(i)
          break;
        case 7:
          this.numSeriesArray.col6.push(i)
          break;
        case 8:
          this.numSeriesArray.col7.push(i)
          break;
        case 9:
          this.numSeriesArray.col8.push(i)
          break;
        case 10:
          this.numSeriesArray.col9.push(i)
          break;
        default:
          break;
      }
    }    
  }

  disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }
}
