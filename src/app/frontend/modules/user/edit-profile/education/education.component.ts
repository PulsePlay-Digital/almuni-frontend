import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from './../../../../services/config';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationForm: FormGroup | any;
  specialization: any;
  submitted: boolean | undefined;
  constructor(public fb: FormBuilder, public config: Config) {
    this.specialization = this.config.specialization;
  }

  ngOnInit(): void {
    this.buildform();
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.educationForm = this.fb.group({
      degree: ["", Validators.required],
      instituteName: ["", Validators.required],
      yearOfPassing: ["", Validators.required],
      specialization: ["", Validators.required],
      otherSpecialization: [""],
      addItems: this.fb.array([]),
    });
  }

  addItems(): FormArray {
    return this.educationForm.get("addItems") as FormArray;
  }

  get f() {
    return this.educationForm.controls;
  }

  newItems(): FormGroup {
    return this.fb.group({
      degree: ["", Validators.required],
      instituteName: ["",Validators.required],
      yearOfPassing: ["", Validators.required],
      specialization: ["", Validators.required],
      otherSpecialization: [""]
    });
  }

  addQuantity() {
    this.addItems().push(this.newItems());
  }

  removeItems(i: number) {
    this.addItems().removeAt(i);
  }

  edit() {
    this.submitted = true;
  }

}
