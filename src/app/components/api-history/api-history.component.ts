import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {Transaction} from "../../model";

@Component({
  selector: 'app-api-history',
  templateUrl: './api-history.component.html',
  styleUrls: ['./api-history.component.css']
})
export class ApiHistoryComponent implements OnInit {

  savedTransactions: Transaction[] = []

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.savedTransactions = this.service.savedTransactions
  }
}
