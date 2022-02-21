import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { TokenInterceptor } from "./../../../../admin/core/token.interceptor"
import { AuthService } from "./../../../services/auth.service";
import { NotificationService } from "./../../../services/notification.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  validLogin: any;
  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    public notification: NotificationService,
    public fb: FormBuilder,
    public router: Router,
    public _snackBar: MatSnackBar,
    private interceptor: TokenInterceptor
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

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

  get f() {
    return this.loginForm.controls;
  }

  async login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      let params = this.loginForm.value;
      await this.authService.login(params).subscribe(
        (res: any) => {
          if (res.status === 200) {
            console.log(res)
            localStorage.setItem("currentUser", JSON.stringify(res));
            // this.interceptor.notificationService.openSuccessSnackBar(
            //   res.message
            // );
            this.router.navigate(["/admin/dashboard"]);
            location.reload();
          } else {
            this.interceptor.notificationService.openFailureSnackBar(
              res.message
            );
          }
        },
        (error) => {
          console.log(error);
          this.interceptor.notificationService.openFailureSnackBar(error);
        }
      );
    }
  }
}
