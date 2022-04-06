import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../../../services/data.service';

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
  currentUser: any;
  author: any;

  constructor( 
    public fb: FormBuilder,
    public dataService: DataService
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
  }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.pastEvent = this.pastItems;
      this.upcomingEvent = this.upcomingItems;
      this.loading = false;
    }, 500);
    this.buildForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;
  }

/**
 * Build Form Data
 */
  buildForm() {
    this.industryForm = this.fb.group({
      author: [""],
      title: ["", Validators.required],
      venue: ["", Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
      time: [""],
      eventHost: [""],
      cost: ["", Validators.required],
      is_active: ["active"],
      eventPageLink: [""],
      contactNumber: [""],
      attending: [''],
      city: [''],
      country:[''],
      state: [''],
      eventPersonEmail: [''],
      topicFocus: [''],
      industryFocus: [''],
      nameSubmittedBy: [''],
      numberSubmittedBy: [''],
      emailSubmittedBy: [''],
      companiesParticipating: [''],
      category:['alumni']
    });
  }

  /**
   * Get form Controls
   */
  get f() { return this.industryForm.controls;}

  /**
   * Function to add Event
   * @returns 
   */
  async submit() {
    let action = {
      action: 'create-event'
    }
    this.submitted = true;
    if (this.industryForm.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("author", this.author);
      formData.append("title", this.industryForm.value.title);
      formData.append("venue", this.industryForm.value.venue);
      formData.append("description", this.industryForm.value.description);
      formData.append("date", this.industryForm.value.date);
      formData.append("time", this.industryForm.value.time);
      formData.append("eventHost", this.industryForm.value.eventHost);
      formData.append("cost", this.industryForm.value.cost);
      formData.append("is_active", this.industryForm.value.is_active);
      formData.append("eventPageLink", this.industryForm.value.eventPageLink);
      formData.append("contactNumber", this.industryForm.value.contactNumber);
      formData.append("attending", this.industryForm.value.attending);
      formData.append("city", this.industryForm.value.city);
      formData.append("country", this.industryForm.value.country);
      formData.append("state", this.industryForm.value.state);
      formData.append("eventPersonEmail", this.industryForm.value.eventPersonEmail);
      formData.append("topicFocus", this.industryForm.value.topicFocus);
      formData.append("industryFocus", this.industryForm.value.industryFocus);
      formData.append("nameSubmittedBy", this.industryForm.value.nameSubmittedBy);
      formData.append("numberSubmittedBy", this.industryForm.value.numberSubmittedBy);
      formData.append("emailSubmittedBy", this.industryForm.value.emailSubmittedBy);
      formData.append("companiesParticipating", this.industryForm.value.companiesParticipating);
      formData.append("category", this.industryForm.value.category);
      

      await this.dataService.postData(action, formData).subscribe((res: any) => {
        console.log(res)
      }, error => {
        console.log(error)
      });
    }
  }
}
