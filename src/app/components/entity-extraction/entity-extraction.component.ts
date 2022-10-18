import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Entity} from "../../model";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  extractionForm: FormGroup
  includedString: string = ''
  abstractBool: boolean = false
  categoriesBool: boolean = false
  imageBool: boolean = false
  minConfidence: number = 0.5
  result: Array<Entity> = []

  constructor(private service: PostService, private formBuilder: FormBuilder) {
    this.extractionForm = this.formBuilder.group({text: ['', [Validators.required]]})
  }

  ngOnInit(): void {
  }

  checkIncludedCategories() {
    if (this.abstractBool) this.includedString += "abstract,"
    if (this.categoriesBool) this.includedString += "categories,"
    if (this.imageBool) this.includedString += "image"
  }

  extractEntities() {
    this.includedString = ''

    this.checkIncludedCategories()

    this.service.extractEntities(
      this.extractionForm.get('text')?.value,
      this.minConfidence,
      this.includedString,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.extractionForm.reset()
      this.result = result.annotations
    })
  }

}
