import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TextSimReq} from "../../model";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  simResult: number
  textForm: FormGroup;

  constructor(private textSimService: PostService, private formBuilder: FormBuilder) {
    this.textForm = this.formBuilder.group({
      text1: ['', [Validators.required]],
      text2: ['', [Validators.required]],
    })
    this.simResult = 0
  }

  ngOnInit(): void {
  }

  getSimilarity() {
    this.textSimService.compareTexts(
      this.textForm.get('text1')?.value,
      this.textForm.get('text2')?.value,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.textForm.reset();
      this.simResult = result.similarity
    })
  }

}
