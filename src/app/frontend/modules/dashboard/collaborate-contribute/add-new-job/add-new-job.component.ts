import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Config } from './../../../../services/config';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.scss']
})
export class AddNewJobComponent implements OnInit {
  addJobForm: FormGroup | any;
  submitted: boolean = false;
  author: any;
  authorId: any;
  currentUser: any;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public notify: TokenInterceptor,
    public config: Config,
    public router: Router
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      this.authorId = this.currentUser?.id;
    }
   }

  ngOnInit(): void {
    this.buildForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname  + ((mname == null) ? '' : ' ' + mname ) + ' ' + lname;
  }
/**
 * Build form data
 */
  buildForm() {
    this.addJobForm = this.fb.group({
      id: [this.authorId],
      author: [this.author],
      title: ['', Validators.required],
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      city: ['', Validators.required],
      salary: ['', Validators.required],
      fresherApply: [false],
      workExperience: [''],
      skillsRequired: [''],
      qualification: [''],
      contactPerson: ['', Validators.required],
      contactNumber: [''],
      email: ['', [ Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      description: ['', Validators.required],
      is_active: ['open'],
      type: 'alumni',
      status: ['unapproved']
    })
  }
/**
 * Get all forms controls
 */
  get f() { return this.addJobForm.controls; }

  /**
   * Function to Add jobs
   * @returns 
   */
  async addJob() {
    this.submitted = true;
    if(this.addJobForm.invalid) {
      return;
    } else {
      let action: string = 'create-jobs';
      this.addJobForm.value.author = this.author;
      await this.dataService.postData(action, this.addJobForm.value).subscribe((res: any) => {
        if (res.status === 200) {
          this.notify.notificationService.openSuccessSnackBar(res.message);
          this.router.navigate(['/collaborate-contribute/careers']);
        }
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);
      });
    }
  }
/**
 * Navigate to Previous page
 */
 back() {
    this.config.navigateBack();
  }
}
