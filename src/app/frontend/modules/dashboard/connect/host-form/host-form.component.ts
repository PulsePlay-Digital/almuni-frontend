import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-host-form',
  templateUrl: './host-form.component.html',
  styleUrls: ['./host-form.component.scss']
})
export class HostFormComponent implements OnInit {
  addEventForm: FormGroup | any;
  eventPic:any;
  image: any;
  submitted: boolean = false;
  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addEventForm = this.fb.group({
      author: [""],
      title: ["", Validators.required],
      venue: ["", Validators.required],
      category: [""],
      description: ["", Validators.required],
      date: ["", Validators.required],
      time: [""],
      type: [""],
      eventHost: [""],
      eventAttend: [""],
      cost: ["", Validators.required],
      eventPageLink: [""],
      is_active: [""],
      contactNumber: [""],
      eventImage: ["", Validators.required],
    });
  }

  get f() { return this.addEventForm.controls;}

  onUploadImage(event: any) {
    this.eventPic = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.eventPic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      };
    }
  }

  submit() {
    this.submitted = true;
    if (this.addEventForm.invalid) {
      return;
    } else {
      
    }
  }
}
