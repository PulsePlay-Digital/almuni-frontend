import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup | any;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.forgotPassForm = this.fb.group({
      personal_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
  }

  get f() {
    return this.forgotPassForm.controls;
  }
  /**
   * Function to submit email
   * @returns 
   */
  async submit() {
    this.submitted = true;
    if (this.forgotPassForm.invalid) {
      return;
    } else {
      console.log(this.forgotPassForm.value);
      let data = await this.authService.forgotPassword(this.forgotPassForm.value).toPromise();
      console.log(data);
    }
  }
}
