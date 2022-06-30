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
  @Input() type: any;
  educationForm: FormGroup | any;
  specialization: any;
  submitted: boolean | undefined;
  currentUser: any;
  loading: boolean = false;
  eduId: any;

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
    let action: string = "all-profileUsers";
    await this.dataService
      .getDataById(action, this.currentUser?.id)
      .subscribe((res: any) => {
        this.eduId = res?.Education;
        setTimeout(() => {
          this.educationForm.patchValue({
            ...res?.Education
          });
        }, 800);
        this.loading = false;
      });
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
      institute_name: ["",Validators.required],
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
    this.submitted = true;
    if(this.educationForm.invalid) {
      return;
    } else if(this.educationForm.valid) {
      this.loading = true;
      let action: string = "update-education";
      await this.dataService.updateData(action, this.educationForm.value).subscribe((res: any) => {
        this.notify.notificationService.openSuccessSnackBar(res?.message);
        this.loading = false;
      },
      error => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      })
    }
  }

}
