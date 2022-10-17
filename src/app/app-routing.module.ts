import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {TokenEntryComponent} from "./components/token-entry/token-entry.component";
import {ApiHistoryComponent} from "./components/api-history/api-history.component";

const routes: Routes = [
  {
    path: "",
    component: EntityExtractionComponent
  },
  {
    path: "textSimilarity",
    component: TextSimilarityComponent
  },
  {
    path: "languageDetection",
    component: LanguageDetectionComponent
  },
  {
    path: "sentimentAnalysis",
    component: SentimentAnalysisComponent
  },
  {
    path: "tokenEntry",
    component: TokenEntryComponent
  },
  {
    path: "apiHistory",
    component: ApiHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
