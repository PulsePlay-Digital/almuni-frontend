import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  validLogin: any;

  constructor(
    public authService: AuthService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      personal_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required]
    })
  }

  login() {
    let params = this.loginForm.value;
    console.log(params);
    this.authService.login(params).subscribe((res: any) => {
      console.log(res, 'res');
      localStorage.setItem('token', JSON.stringify(res.access_token));
    }, error => {
      console.log(error);
    });
  }
}
