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

  // private readonly apiUrl = environment.postApi;

  constructor(private httpClient: HttpClient) {
  }

  compareTexts(text1: string, text2: string, token: string): Observable<TextSimRes> {
    return this.httpClient.get<TextSimRes>(`https://api.dandelion.eu/datatxt/sim/v1/?text1=Cameron wins the Oscar&text2=All nominees for the Academy Awards&token=040a70ea8796446db7174acaf8f42884`)
  }

}
