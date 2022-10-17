import { Component, OnInit } from '@angular/core';
import {DetectedLang, LanguageDetReq} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {


  languageDetReq: LanguageDetReq = {
    text: '',
    option: false,
    token: '',
    detectedLangs: []
  };

  resultArray: Array<DetectedLang>;
  cleanOptionEnabled: boolean;
  detectionForm: FormGroup

  constructor(private languageDetService: PostService, private formBuilder: FormBuilder) {
    this.detectionForm = this.formBuilder.group({
      text: ['', [Validators.required]]
    })
    this.cleanOptionEnabled = false
    this.resultArray = []
  }

  ngOnInit(): void {
  }

  detectLanguages() {
    this.languageDetService.detectLanguages(
      this.detectionForm.get('text')?.value,
      this.cleanOptionEnabled,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.detectionForm.reset(),
        this.resultArray = result.detectedLangs;
    })
  }
}
