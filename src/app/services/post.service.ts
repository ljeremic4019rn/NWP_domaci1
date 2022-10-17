import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {TextSimRes, TextSimReq, Transaction} from "../model";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class PostService {

  savedTransactions: Transaction[]
  date: Date

  constructor(private httpClient: HttpClient) { //040a70ea8796446db7174acaf8f42884
    this.savedTransactions = []
    this.date = new Date();
  }

  compareTexts(text1: string, text2: string, token: string): Observable<TextSimRes> {
    this.saveTransaction("GET",`${environment.textSimilarity}/?text1=${text1}&text2=${text2}&token=${token}`)
    return this.httpClient.get<TextSimRes>(`${environment.textSimilarity}/?text1=${text1}&text2=${text2}&token=${token}`,)

  }

  private saveTransaction(method: string, url: string): void {
    this.savedTransactions.push(new Transaction(
        formatDate(new Date(), 'yyyy/MM/dd', 'en'),
        formatDate(new Date(), 'hh-mm-ss', 'en'),
        method,
        url
      ))

    console.log(this.savedTransactions)
  }



}
