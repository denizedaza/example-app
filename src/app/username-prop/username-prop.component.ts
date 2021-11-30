import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-prop',
  templateUrl: './username-prop.component.html',
  styleUrls: ['./username-prop.component.css']
})
export class UsernamePropComponent implements OnInit {
  username = '';
  usernameStatus = false;

  constructor() { }

  ngOnInit(): void {
  }

  ifEmptyUser() {
    if (this.username === ''){
      this.usernameStatus = true;
    } else {
      this.usernameStatus = false;
    }
  }

  onResetUsername() {
    this.username = '';
  }

}
