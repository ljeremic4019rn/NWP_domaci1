import { Component, OnInit } from '@angular/core';
import {DetectedLanguage} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {


  detectionForm: FormGroup
  result: Array<DetectedLanguage> = []
  cleanBool: boolean = false

  constructor(private languageDetService: PostService, private formBuilder: FormBuilder) {
    this.detectionForm = this.formBuilder.group({text: ['', [Validators.required]]})
  }

  ngOnInit(): void {
  }

  detectLanguages() {
    this.languageDetService.detectLanguages(
      this.detectionForm.get('text')?.value,
      this.cleanBool,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.detectionForm.reset()
        this.result = result.detectedLangs
    })
  }
}
