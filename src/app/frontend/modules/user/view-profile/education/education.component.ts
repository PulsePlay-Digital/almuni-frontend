import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';
import { Config } from './../../../../services/config';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() profileData: any;
  educationForm: FormGroup | any;
  specialization: any;
  submitted: boolean | undefined;
  currentUser: any;
  loading: boolean = false;
  eduId: any;
  isCurrentUser: boolean = false;
  constructor(
    private fb: FormBuilder,
    private config: Config,
    private dataService: DataService,
    private notify: TokenInterceptor
  ) {
    this.specialization = this.config?.specialization;
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  async ngOnInit() {
    this.buildform();
    this.loading = true;
    setTimeout(() => {
      if (this.profileData.Users.id == this.currentUser.id) {
        this.isCurrentUser = true;
      } else {
        this.isCurrentUser = false;
      }
      this.educationForm.patchValue({
        ...this.profileData?.Education
      });
      this.loading = false;
    }, 2000);
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.educationForm = this.fb.group({
      id: [this.eduId?.id],
      degree_name: ["", Validators.required],
      institute_name: ["", Validators.required],
      passing_year: ["", Validators.required],
      specialization: ["", Validators.required],
      other_specialization: [""],
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
      id: [this.eduId?.id],
      degree_name: ["", Validators.required],
      institute_name: ["", Validators.required],
      passing_year: ["", Validators.required],
      specialization: ["", Validators.required],
      other_specialization: [""]
    });
  }

  addQuantity() {
    this.addItems().push(this.newItems());
  }

  removeItems(i: number) {
    this.addItems().removeAt(i);
  }

  async edit() {

  }

}
