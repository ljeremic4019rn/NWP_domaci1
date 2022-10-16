import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date;

  primaryColor: string = 'blue';
  boldTextEnabled: boolean = true;

  constructor(private router: Router) {
    this.date = new Date();
  }

  ngOnInit(): void {

  }

}
