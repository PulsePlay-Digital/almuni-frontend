import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenInterceptor } from 'src/app/frontend/core/token.interceptor';
import { DataService } from 'src/app/frontend/services/data.service';

@Component({
  selector: 'app-host-form',
  templateUrl: './host-form.component.html',
  styleUrls: ['./host-form.component.scss']
})
export class HostFormComponent implements OnInit {
  @Input() eventCategory: any;

  addEventForm: FormGroup | any;
  eventPic:any;
  image: any;
  submitted: boolean = false;
  currentUser: any;
  author: any;
  
  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
   }

  ngOnInit(): void {
    this.buildForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;
  }

  buildForm() {
    this.addEventForm = this.fb.group({
      author: [""],
      title: ["", Validators.required],
      venue: ["", Validators.required],
      category: [this.eventCategory, Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
      time: [""],
      type: ["", Validators.required],
      eventHost: [""],
      eventAttend: [""],
      cost: [""],
      eventPageLink: [""],
      is_active: ["inactive"],
      contactNumber: ["", Validators.required],
      eventImage: ["", Validators.required]
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

  async submit() {
    this.submitted = true;
    let action = {
      action: 'create-event'
    }

    if (this.addEventForm.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("eventImage", this.eventPic ? this.eventPic : "");
      formData.append("author", this.author);
      formData.append("title", this.addEventForm.value.title);
      formData.append("description", this.addEventForm.value.description);
      formData.append("date", this.addEventForm.value.date);
      formData.append("venue", this.addEventForm.value.venue);
      formData.append("cost", this.addEventForm.value.cost);
      formData.append("is_active", this.addEventForm.value.is_active);
      formData.append("type", this.addEventForm.value.type);
      formData.append("time", this.addEventForm.value.time);
      formData.append("contactNumber", this.addEventForm.value.contactNumber);
      formData.append("eventPageLink", this.addEventForm.value.eventPageLink);
      formData.append("eventHost", this.addEventForm.value.eventHost);
      formData.append("category", this.addEventForm.value.category);

      await this.dataService.postData(action, formData).subscribe((res: any) => {
        if (res?.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
        }
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);;
      });
    }
  }
}
