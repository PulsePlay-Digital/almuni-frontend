import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./../../../services/auth.service";
import { NotificationService } from "./../../../services/notification.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup | any;
  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    public notificationService: NotificationService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Function to bulid form
   */
  buildForm() {
    this.forgotPassForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
    });
  }

  /**
   * Get all form control
   */
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
      let data: any = await this.authService
        .forgotPassword(this.forgotPassForm.value)
        .toPromise();
      if (data?.status === 200) {
        this.notificationService.openSuccessSnackBar(data?.message, "close");
        this.router.navigate(["/auth/login"]);
      }
    }
  }
}
