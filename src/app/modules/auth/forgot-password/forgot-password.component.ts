import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    // private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  // buildForm() {
  //   this.forgotPassForm = this.fb.group({
  //     email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  //     code: [''],
  //     mobile_number:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
  //     secuirty_question:[],
  //     secuirty_answer:[]
  //   });
  // }
}
