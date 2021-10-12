import { UtilityService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-checkboxes',
  templateUrl: './action-checkboxes.component.html',
  styleUrls: ['./action-checkboxes.component.scss']
})
export class ActionCheckboxesComponent implements OnInit {

  checkBoxArray = [
    {label: "T0", value: 0, isChecked: true},
    {label: "T1", value: 1000, isChecked: false},
    {label: "T2", value: 2000, isChecked: false},
    {label: "T3", value: 3000, isChecked: false},
    {label: "T4", value: 4000, isChecked: false},
    {label: "T5", value: 5000, isChecked: false},
    {label: "T6", value: 6000, isChecked: false},
    {label: "T7", value: 7000, isChecked: false},
    {label: "T8", value: 8000, isChecked: false},
    {label: "T9", value: 9000, isChecked: false}];
  letterArray = ["A", "E", "O"];
  gstNo = "GST No.:27AVQPL7093PIZF";
  isChecked = false;
  prevItem = -1;
  prevSelectedItems = [];
  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
  }

  generateSeries(item, e) { 
    item.isChecked = e.target.checked;
    if(!this.prevSelectedItems.includes(item.value))
      this.prevSelectedItems.push(item.value);
    if(this.prevSelectedItems.includes(item.value) && !item.checked) {
      this.prevSelectedItems.splice(item.value);
    }    
    if(this.prevItem ==-1 ){
      this.prevItem = item.value;     
    }

    if(e.target.checked && item.value >= this.prevItem) {
     this.utilityService.generateNumberSeries(item.value);
    } else if(this.prevItem >= item.value) {
      this.utilityService.generateNumberSeries(this.prevItem);
    }
    if(e.target.checked) {
      this.prevItem = item.value;
    }
  }

}
