import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from 'src/app/frontend/services/config';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-add-special-project',
  templateUrl: './add-special-project.component.html',
  styleUrls: ['./add-special-project.component.scss']
})
export class AddSpecialProjectComponent implements OnInit {
  editSpecialForm : FormGroup | any;
  submitted: boolean = false;
  currentUser: any;
  projectId: any;
  author: any;

  constructor( public fb: FormBuilder,
    public dataService: DataService,
    public notify: TokenInterceptor,
    public config: Config
    ) {
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
        this.projectId = this.currentUser?.id;
      }
     }

  ngOnInit(): void {
    this.buildSpecialForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname  + ((mname == null) ? '' : ' ' + mname ) + ' ' + lname;
  }

  buildSpecialForm() {
    this.editSpecialForm = this.fb.group({
      id: [this.projectId],
      author: [this.author],
      title: ['', Validators.required],
      charityName: ['', Validators.required],
      monetaryDonation: [false],
      timeDonation: [false],
      contactName: ['', Validators.required],
      code: [''],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      link: ['', Validators.required],
      description: ['', Validators.required],
      is_active:['active']
    });
  }

  /**
   * Get form controls
   */
  get f() { return this.editSpecialForm.controls;}

  /**
   * Function to add special project
   * @returns 
   */
  async submit() {
    let action: string = 'create-project';

    this.submitted = true;
    if(this.editSpecialForm.invalid){
      return;
    } else {
      await this.dataService.postData(action, this.editSpecialForm.value).subscribe((res: any) => {
        if (res?.status === 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
        }
      }, error => {
          this.notify.notificationService.openFailureSnackBar(error);
      })
    }
  }

  /**
   * Function to navigate previous page
   */
  back() {
    this.config.navigateBack();
  }
}
