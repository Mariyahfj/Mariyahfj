import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  btnsArray = ['Reprint', 'Result', 'Cancel', 'Account', 'Password', 'Logout'];
  timeLeft: number = 900;
  interval: any;
  currentTime = new Date();
  
  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 1;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
