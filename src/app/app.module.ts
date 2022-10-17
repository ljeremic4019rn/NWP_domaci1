import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordPipe} from "./pipes/password.pipe";
import {AppComponent} from "./components/app/app.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {ApiHistoryComponent} from "./components/api-history/api-history.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {TokenEntryComponent} from "./components/token-entry/token-entry.component";

@NgModule({
  declarations: [
    AppComponent,
    PasswordPipe,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    TokenEntryComponent,
    ApiHistoryComponent
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
