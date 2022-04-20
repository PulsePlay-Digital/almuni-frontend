import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-by-me',
  templateUrl: './shared-by-me.component.html',
  styleUrls: ['./shared-by-me.component.scss']
})
export class SharedByMeComponent implements OnInit {
  @Input() title: any;
  form: FormGroup | any;
  file: any;
  image: any;
  submitted: boolean = false;
  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.title)
  }

  buildForm() {
    this.form = this.fb.group({
      description: [''],
      image: ['']
    });
  }

  get f() { return this.form.controls;}

  onUploadImage(event: any) {
    this.file = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.file = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      }
    }
  }

  submit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    } else {
      let action = {
        action: 'create-club'
      }
      console.log(this.form.value);
      let formData = new FormData();
      formData.append('image', (this.file) ? this.file : '');
      formData.append('description', this.form.value.description);  
    }
  }
}
