import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

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
      company_name: [""],
      job_title: [""],
      start_date: [""],
      end_date: [""],
      high_summary: [""],
      addItems: this.fb.array([]),
    });
  }
  addItems(): FormArray {
    return this.experienceForm.get("addItems") as FormArray;
  }

  newItems(): FormGroup {
    return this.fb.group({
      company_name: [""],
      job_title: [""],
      start_date: [""],
      end_date: [""],
      high_summary: [""],
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
