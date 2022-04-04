import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-industry-connect',
  templateUrl: './industry-connect.component.html',
  styleUrls: ['./industry-connect.component.scss']
})
export class IndustryConnectComponent implements OnInit {

  @Input() pastItems: any;
  @Input() upcomingItems: any;
  @Input() imgPath: any;

  loading: boolean = false;
  industryForm: FormGroup | any;
  eventPic:any;
  image: any;
  submitted: boolean = false;
  pastEvent: any;
  upcomingEvent: any;
  constructor( 
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.pastEvent = this.pastItems;
      this.upcomingEvent = this.upcomingItems;
      this.loading = false;
    }, 500);
    this.buildForm();
  }


  buildForm() {
    this.industryForm = this.fb.group({
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

  get f() { return this.industryForm.controls;}

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
    if (this.industryForm.invalid) {
      return;
    } else {
      
    }
  }
}
