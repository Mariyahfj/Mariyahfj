import { UtilityService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-action-checkboxes',
  templateUrl: './action-checkboxes.component.html',
  styleUrls: ['./action-checkboxes.component.scss']
})
export class ActionCheckboxesComponent implements OnInit {

  checkBoxArray = [
    { label: "T0", value: 0, isChecked: false, checkedPosition: 1 },
    { label: "T1", value: 1000, isChecked: true, checkedPosition: 2 },
    { label: "T2", value: 2000, isChecked: false, checkedPosition: 3 },
    { label: "T3", value: 3000, isChecked: false, checkedPosition: 4 },
    { label: "T4", value: 4000, isChecked: false, checkedPosition: 5 },
    { label: "T5", value: 5000, isChecked: false, checkedPosition: 6 },
    { label: "T6", value: 6000, isChecked: false, checkedPosition: 7 },
    { label: "T7", value: 7000, isChecked: false, checkedPosition: 8 },
    { label: "T8", value: 8000, isChecked: false, checkedPosition: 9 },
    { label: "T9", value: 9000, isChecked: false, checkedPosition: 10 }];
  letterArray = ["A", "E", "O"];
  gstNo = "GST No.:27AVQPL7093PIZF";
  isChecked = false;
  prevItem = -1;
  prevSelectedItems = [];
  constructor(public utilityService: UtilityService) { }

  allSeriesArray = [];
  checkedArray = []
  ngOnInit(): void {
    this.checkedArray.push(this.checkBoxArray[0]);
  }

  generateSeries(item, e, index) {
    let generateVal: any;
    generateVal = item.value;
    if (e.target.checked && !this.checkedArray.includes(item)) {
      // item.checkedPosition = this.checkedArray.length + 1;
      this.checkedArray.push(item);
    } else if (!e.target.checked && this.checkedArray.includes(item)) {
      var removeIndex = this.checkedArray.map(function (item) { return item.label; }).indexOf(item.label);
      this.checkedArray.splice(removeIndex, 1);      
      let max = _.maxBy(this.checkedArray, 'checkedPosition');
      let latestcheckedIndex = _.findIndex(this.checkedArray, ['checkedPosition', max.checkedPosition]);
      generateVal = this.checkedArray[latestcheckedIndex].value;

    }    
    this.allSeriesArray = this.utilityService.allSeriesArray;
    console.log(this.utilityService.numSeriesArray);
    item.isChecked = e.target.checked;    
    
    if (this.allSeriesArray[item.label] !== undefined) {
      this.utilityService.numSeriesArray = this.allSeriesArray[item.label];
    } else {
      this.utilityService.generateNumberSeries(generateVal);
    }

    this.utilityService.setObjectRowSeries();
  }
  
}
