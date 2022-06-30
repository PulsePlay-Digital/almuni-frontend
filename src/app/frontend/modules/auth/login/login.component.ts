import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenInterceptor } from "./../../../core/token.interceptor";
import { AuthService } from "./../../../..//frontend/services/auth.service";
import { NotificationService } from "./../../../../frontend/services/notification.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  validLogin: any;
  submitted: boolean = false;
  heading: string = "SBUP Exclusive Alumni";
  loading: boolean = false;

  constructor(
    public authService: AuthService,
    public notification: NotificationService,
    public fb: FormBuilder,
    public router: Router,
    public notify: TokenInterceptor
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Function to get form Control
   */
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Function to build form
   */
  buildForm() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  /**
   * Function to login user
   * @returns
   */
  async login() {
    this.submitted = true;
    this.loading = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      await this.authService.login(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res)
          if (res?.status == 200) {
            localStorage.setItem("currentUser", JSON.stringify(res?.user));
            localStorage.setItem("token", JSON.stringify(res?.access_token));
            this.loading = false;
            this.notify.notificationService.openSuccessAlert(
              "Login Successfully"
            );
            this.router.navigateByUrl("/home").then((res) => {
              location.reload();
            });
          } else if (res?.status == 401) {
            this.notify.notificationService.openWarningAlert(
              res?.message
            );
            // this.notify.notificationService.openFailureSnackBar(res?.message);
            this.loading = false;
          }
        },
        (error) => {
          this.notify.notificationService.openErrorAlert(
            error.error?.message
          );
          this.loading = false;
        }
      );
    }
  }
}
