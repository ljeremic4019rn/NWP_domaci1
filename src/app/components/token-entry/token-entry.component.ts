import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-entry',
  templateUrl: './token-entry.component.html',
  styleUrls: ['./token-entry.component.css']
})
export class TokenEntryComponent implements OnInit {

  token: string;
  savedToken: string;

  constructor() {
    this.token = '';
    this.savedToken = '';
  }

  ngOnInit(): void {
    this.savedToken = String(localStorage.getItem("token"))
  }

  setToken(): void {
    localStorage.setItem("token", this.token);
    console.log(localStorage.getItem("token"));
  }

}
