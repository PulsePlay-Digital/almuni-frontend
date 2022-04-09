import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor( public fb: FormBuilder,
    public dataService: DataService,
    public notify: TokenInterceptor
    ) { }

  ngOnInit(): void {
    this.buildSpecialForm();
  }

  buildSpecialForm() {
    this.editSpecialForm = this.fb.group({
      id: [''],
      author: [''],
      title: ['', Validators.required],
      charityName: ['', Validators.required],
      monetaryDonation: [false],
      timeDonation: [false],
      contactName: ['', Validators.required],
      code: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      link: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f() { return this.editSpecialForm.controls;}

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
}
