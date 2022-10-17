import { Component, OnInit } from '@angular/core';
import {Color, Sentiment} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  color: Color

  lang: string
  typeColor: string = 'black'
  resultSentiment: Sentiment
  sentimentForm: FormGroup

  constructor(private sentimentAnService: PostService, private formBuilder: FormBuilder) {
    this.sentimentForm = this.formBuilder.group({
      text: ['', [Validators.required]]
    })
    this.lang = 'auto'
    this.resultSentiment = new Sentiment
    this.color = new Color(0, 0, 0)
  }

  ngOnInit(): void {
  }

  hsl_col_perc(score: number): void{
    var hue = ((score + 1)/2)*120
    this.typeColor = 'hsl('+hue+', 100%, 50%)'
  }

  public test (a: Color, b: Color, t: number): Color {
    return new Color
    (
      a.r + (b.r - a.r) * t,
      a.g + (b.g - a.g) * t,
      a.b + (b.b - a.b) * t
    )
  }

  analyseSentiment() {
    this.sentimentAnService.analyseSentiment(
      this.sentimentForm.get('text')?.value,
      this.lang,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.sentimentForm.reset()
        this.resultSentiment = result.sentiment//todo popravi boje
      this.hsl_col_perc(this.resultSentiment.score)

    })
  }

}
