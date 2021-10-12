import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent implements OnInit {

  btnsArray = ['Reprint', 'Result', 'Cancel', 'Account', 'Password', 'Support', 'Player', 'Logout'];
  constructor() { }

  ngOnInit(): void {
  }

}
