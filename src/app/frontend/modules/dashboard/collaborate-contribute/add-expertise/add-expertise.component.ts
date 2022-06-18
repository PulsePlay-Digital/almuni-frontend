import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Config } from './../../../../services/config';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-add-expertise',
  templateUrl: './add-expertise.component.html',
  styleUrls: ['./add-expertise.component.scss']
})
export class AddExpertiseComponent implements OnInit {
  addExpertiseForm : FormGroup | any;
  currentUser: any;
  author: any;
  workShopField: boolean = false;
  facultyFields: boolean = false;
  seminarFields: boolean = false;
  submitted: boolean = false;

  constructor(
    public fb: FormBuilder,
    public config: Config,
    public dataService: DataService,
    public notify: TokenInterceptor,
    public router: Router
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
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
    this.addExpertiseForm = this.fb.group({
      author: [this.author],
      type: ['', Validators.required],
      eventName: [''],
      workshopTopic: [''],
      participationType: [''],
      academicCategory: [''],
      dateTime: [''],
      dateFrom: [''],
      dateTo: [''],
      description: ['', Validators.required],
      status: ['unapproved']
    })
  }

  /**
   * Get all form controls
   */
  get f() { return this.addExpertiseForm.controls; }

  /**
   * Change select data
   * @param e 
   */
  changeType(e: any) {
    let event = e?.target?.value;
    if (event == 'seminar') {
      this.seminarFields = true;
      this.facultyFields = false;
      this.workShopField = false;
    } else if(event == 'faculty') {
      this.seminarFields = false;
      this.facultyFields = true;
      this.workShopField = false;
    } else if (event == 'workshops'){
      this.seminarFields = false;
      this.facultyFields = false;
      this.workShopField = true;
    }
  }

  /**
   * Function to Add Expertise
   * @returns 
   */
  async addExpertise() {
    this.submitted = true;
    if (this.addExpertiseForm.invalid){
      return;
    } else {
      let action: string = 'create-expertise';
      await this.dataService.postData(action, this.addExpertiseForm.value).subscribe((res: any) => {
        if(res.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res.message);
          this.router.navigate(['/collaborate-contribute/engage-with-society']);
        }
      },error => {
        this.notify.notificationService.openFailureSnackBar(error);
      })
    }
  }

  /**
   * Function to redirect previous page
   */
  back() {
    this.config.navigateBack();
  }
}
