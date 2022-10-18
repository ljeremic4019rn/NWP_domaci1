import { Component, OnInit } from '@angular/core';
import {Sentiment} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  sentimentForm: FormGroup
  rgbColor: string = ''
  resultSentiment: Sentiment = new Sentiment()
  language: string = 'auto'


  constructor(private service: PostService, private formBuilder: FormBuilder) {
    this.sentimentForm = this.formBuilder.group({text: ['', [Validators.required]]})
  }

  ngOnInit(): void {
  }

  createColor(score: number): void{
    let green = ((score + 1)/2) * 255
    if (green < 0) green = 0
    let red = 255 - green
    this.rgbColor = 'rgb(' + red +', '+ green +', 0)'
  }

  analyseSentiment() {
    this.service.analyseSentiment(
      this.sentimentForm.get('text')?.value,
      this.language,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.sentimentForm.reset()
      this.resultSentiment = result.sentiment
      this.createColor(this.resultSentiment.score)
    })
  }

}
