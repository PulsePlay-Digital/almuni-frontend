import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-business-venture-info',
  templateUrl: './business-venture-info.component.html',
  styleUrls: ['./business-venture-info.component.scss']
})
export class BusinessVentureInfoComponent implements OnInit {

  editEntreprenForm: FormGroup | any;
  selectedStatus: any;
  submitted: boolean = false;
  constructor(
     public fb: FormBuilder,
     public dataService: DataService,
     public notify: TokenInterceptor,
     public loaction: Location
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.editEntreprenForm = this.fb.group({
      id: [''],
      company:['', Validators.required],
      owner:[''],
      course:[''],
      batch:['', Validators.required],
      contact:['', Validators.required],
      email:['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      type:[''],
      date_founded:[''],
      industry:[''],
      customer:['',Validators.required],
      address:['',Validators.required],
      country:[''],
      state:[''],
      city:[''],
      funding: [''],
      internship:[false],
      website:['', Validators.required],
      facebook:[''],
      linkedin:[''],
      hours:[''],
      description:['', Validators.required],
      international_operations:[''],
      employee_no:[''],
      locations:[''],
      hiring:[false],
      placement:[false],
      is_active:['active']
    });
  }

 get f() { return this.editEntreprenForm.controls;}


  onChange(item: any) {
    this.selectedStatus = item;
  }

  async add() {
    let action: string = 'create-entrepreneur';
    let params = {
      ...this.editEntreprenForm?.value
    }
    this.submitted = true;
    if(this.editEntreprenForm.invalid) {
      return;
    } else {
      await this.dataService.postData(action, params).subscribe((res: any) => {
        if(res.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
        }
      });
    }
  }

  navigateBack() {
    this.loaction.back();
  }
}
