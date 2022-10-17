import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Entity} from "../../model";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {


  min_confidence: number

  includeString: string
  includeAbstract: boolean
  includeCategories: boolean
  includeImage: boolean

  resultArray: Array<Entity>
  extractionForm: FormGroup

  constructor(private entityExtService: PostService, private formBuilder: FormBuilder) {
    this.extractionForm = this.formBuilder.group({
      text: ['', [Validators.required]]
    })
    this.min_confidence = 0.6
    this.includeString = ''
    this.includeAbstract = false
    this.includeCategories = false
    this.includeImage = false
    this.resultArray = []
  }

  ngOnInit(): void {
  }

  extractEntities() {
    this.includeString = ''

    if(this.includeAbstract) this.includeString += "abstract,"
    if(this.includeCategories) this.includeString += "categories,"
    if(this.includeImage) this.includeString += "image"

    this.entityExtService.extractEntities(
      this.extractionForm.get('text')?.value,
      this.min_confidence,
      this.includeString,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.extractionForm.reset(),
        this.resultArray = result.annotations
    })
    console.log(this.resultArray)
  }

}
