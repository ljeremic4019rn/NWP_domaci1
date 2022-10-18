import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {TextSimilarityRes, Transaction,  LanguageDetRes, EntityExtraction, SentimentAnalysis} from "../model";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class PostService {

  savedTransactions: Transaction[]

  constructor(private httpClient: HttpClient) { //040a70ea8796446db7174acaf8f42884
    this.savedTransactions = []
  }

  compareTexts(text1: string, text2: string, token: string): Observable<TextSimilarityRes> {
    this.saveTransaction("GET",`${environment.textSimilarity}/?text1=${text1}&text2=${text2}&token=${token}`)
    return this.httpClient.get<TextSimilarityRes>(`${environment.textSimilarity}/?text1=${text1}&text2=${text2}&token=${token}`,)
  }

  detectLanguages(text: string, option: boolean, token: string): Observable<LanguageDetRes> {
    this.saveTransaction("GET", `${environment.languageDetection}/?text=${text}&option=${option}&token=${token}`);
    return this.httpClient.get<LanguageDetRes>(`${environment.languageDetection}/?text=${text}&option=${option}&token=${token}`)
  }

  extractEntities(text: string, min_confidence: number, include: string, token: string): Observable<EntityExtraction> {
    this.saveTransaction("GET", `${environment.entityExtraction}/?text=${text}&min_confidence=${min_confidence}&include=${include}&token=${token}`);
    return this.httpClient.get<EntityExtraction>(`${environment.entityExtraction}/?text=${text}&min_confidence=${min_confidence}&include=${include}&token=${token}`)
  }

  analyseSentiment(text: string, lang: string, token: string): Observable<SentimentAnalysis> {
    this.saveTransaction("GET", `${environment.sentimentAnalysis}/?text=${text}&lang=${lang}&token=${token}`);
    return this.httpClient.get<SentimentAnalysis>(`${environment.sentimentAnalysis}/?text=${text}&lang=${lang}&token=${token}`)
  }

  private saveTransaction(method: string, url: string): void {
    this.savedTransactions.push(new Transaction(
        formatDate(new Date(), 'yyyy/MM/dd', 'en'),
        formatDate(new Date(), 'hh:mm:ss', 'en'),
        method,
        url
      ))
    console.log(this.savedTransactions)
  }

}
