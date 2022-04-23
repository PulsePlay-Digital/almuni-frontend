import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationForm: FormGroup | any;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildform();
  }

  buildform() {
    this.educationForm = this.fb.group({
      company_name: [""],
      job_title: [""],
      start_date: [""],
      end_date: [""],
      high_summary: [""],
      setItems: this.fb.array([]),
    });
  }
  
  setItems(): FormArray {
    return this.educationForm.get("setItems") as FormArray;
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

  addQuantities() {
    this.setItems().push(this.newItems());
  }

  deleteItems(i: number) {
    console.log(i);
    this.setItems().removeAt(i);
  }

  edit() {
    console.log(this.educationForm.value);
  }
}
