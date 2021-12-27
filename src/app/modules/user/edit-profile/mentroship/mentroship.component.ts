import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mentroship',
  templateUrl: './mentroship.component.html',
  styleUrls: ['./mentroship.component.scss']
})
export class MentroshipComponent implements OnInit {
  mentorForm: FormGroup | any;
  submitted: boolean = false;

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildform();
  }

  buildform() {
    this.mentorForm = this.fb.group({
      willing_provide: ['', Validators.required],
      add_skills: ['', Validators.required],
      primary_area: [''],
      secondary_area: [''],
      other_area: [''],
      primary_industry: [''],
      secondary_industry: [''],
      other_industry: ['']
    })
  }

  get f() {
    return this.mentorForm.controls;
  }
  
  edit() {
    this.submitted = true;
    console.log(this.mentorForm.value);
  }
}
