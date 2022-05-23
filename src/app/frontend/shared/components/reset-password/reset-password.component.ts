import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenInterceptor } from './../../../core/token.interceptor';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup | any;
  currentUser: any;
  submitted: boolean = false;

  constructor(public fb: FormBuilder, 
    public authService: AuthService, 
    public router: Router,
    public interceptor: TokenInterceptor) { 
    // get current user
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Build Form data
   */
  buildForm() {
    this.resetPasswordForm = this.fb.group({
      id: [this.currentUser?.id],
      old_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      new_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      new_password_confirmation: ['', [Validators.required]],
    },
    {
      validators: this.passwordMatch('new_password', 'new_password_confirmation')
    });
  }

  /**
   * Function to get resetpassword form controls
   */
  get f() { return this.resetPasswordForm?.controls; }

  /**
   * Function to match password 
   * @param passwordKey 
   * @param confirmPasswordKey 
   * @returns 
   */
  passwordMatch(passwordKey: string, confirmPasswordKey: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[passwordKey];
      const matchingControl = formGroup.controls[confirmPasswordKey];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  async reset() {
    this.submitted = true;
    if (this.resetPasswordForm?.invalid) {
      return;
    } else {
      await this.authService.resetPassword(this.resetPasswordForm?.value).subscribe(
        (res: any) => {
          if (res?.status === 200) {
            this.router.navigate(["/login"]);
          } else {
            this.interceptor.notificationService.openFailureSnackBar(res?.message);
          }
        },
        (error) => {
          this.interceptor.notificationService.openFailureSnackBar(error);
        }
      );
    }
  }
}
