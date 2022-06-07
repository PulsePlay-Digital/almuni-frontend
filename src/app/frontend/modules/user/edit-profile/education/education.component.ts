import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  experienceForm: FormGroup | any;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildform();
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.experienceForm = this.fb.group({
      degree: [""],
      instituteName: [""],
      yearOfPassing: [""],
      specialization: [""],
      otherSpecialization: [""],
      addItems: this.fb.array([]),
    });
  }
  addItems(): FormArray {
    return this.experienceForm.get("addItems") as FormArray;
  }

  newItems(): FormGroup {
    return this.fb.group({
      degree: [""],
      instituteName: [""],
      yearOfPassing: [""],
      specialization: [""],
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
    console.log(this.experienceForm.value);
  }

}
