import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  paragraphVisible = false;
  buttonClicks = [];
  numOfClicks = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateButton() {
    this.paragraphVisible = !this.paragraphVisible;
    this.buttonClicks.push(this.numOfClicks += 1)
  }

  getColor() {
    return this.numOfClicks >= 5 ? 'blue' : 'white';
  }

}
