import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-entry',
  templateUrl: './token-entry.component.html',
  styleUrls: ['./token-entry.component.css']
})
export class TokenEntryComponent implements OnInit {
  
  token: string;

  constructor() {
    this.token = '';
  }

  ngOnInit(): void {
  }

  setToken(): void {
    localStorage.setItem("token", this.token);
    console.log(localStorage.getItem("token"));
  }

}
