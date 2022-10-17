import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Post, Comment, TextSimRes, TextSimReq} from "../model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { //040a70ea8796446db7174acaf8f42884
  }

  compareTexts(text1: string, text2: string, token: string): Observable<TextSimRes> {
    return this.httpClient.get<TextSimRes>(`${environment.textSimilarity}/?text1=${text1}&text2=${text2}&token=${token}`,)
  }

}
