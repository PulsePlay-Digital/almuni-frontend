import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from './../../../../services/config';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  othersForm: FormGroup | any;
  submitted: boolean = false;
  familyRelative: any;
  hobbies: any;
  constructor(public fb: FormBuilder, public config: Config) {
    this.familyRelative = this.config.familyAssociate;
    this.hobbies = this.config.hobbies;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Build form Data
   */
  buildForm() {
    this.othersForm = this.fb.group({
      family_relative: [""],
      add_language: ["", Validators.required],
      hobbies_passion: [""],
      other_hobbies_passion: [""],
      security_questions: [""],
      security_answer: [""],
    });
  }
  /**
   * Get form's controls
   */
  get f() {
    return this.othersForm.controls;
  }

  edit() {
    this.submitted = true;
  }

}
