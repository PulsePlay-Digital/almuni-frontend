import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.scss']
})
export class MentorshipComponent implements OnInit {
  mentorForm: FormGroup | any;
  submitted: boolean = false;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildform();
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.mentorForm = this.fb.group({
      willing_provide: ["", Validators.required],
      add_skills: ["", Validators.required],
      primary_area: [""],
      secondary_area: [""],
      other_area: [""],
      primary_industry: [""],
      secondary_industry: [""],
      other_industry: [""],
    });
  }

  /**
   * Get all form controls
   */
  get f() {
    return this.mentorForm.controls;
  }

  edit() {
    this.submitted = true;
  }
}
