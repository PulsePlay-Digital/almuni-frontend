import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-events-at-balaji',
  templateUrl: './events-at-balaji.component.html',
  styleUrls: ['./events-at-balaji.component.scss']
})
export class EventsAtBalajiComponent implements OnInit {

  @Input() pastItems: any;
  @Input() upcomingItems: any;
  @Input() imgPath: any;

  loading: boolean = false;

  speakEventForm: FormGroup | any;
  pastEvent: any;
  upcomingEvent: any;
  workShopField: boolean = false;
  speakerFacultyFields: boolean = false;
  submitted: boolean = false;

  constructor(public fb: FormBuilder, public dataService: DataService) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.pastEvent = this.pastItems;
      this.upcomingEvent = this.upcomingItems;
      this.loading = false;
    }, 500);
    this.buildForm();
  }

  /**
   * Build Form Data
   */
  buildForm() {
    this.speakEventForm = this.fb.group({
      event_id: [3],
      eventName: [''],
      eventCategory: ['', Validators.required],
      topicWorkshop: [''],
      academicCategory: [''],
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  /**
   * Get all Form controls
   */
  get f() { return this.speakEventForm.controls;}

  /**
   * On change Category show/hide fields
   * @param e 
   */
  selectCategory(e:any) {
    let event = e?.target?.value;
    if (event == 'workshop') {
      this.workShopField = true;
      this.speakerFacultyFields = true;
    } else if(event == 'faculty' || event == 'speaker') {
      this.speakerFacultyFields = true;
      this.workShopField = false;
    } else {
      this.workShopField = false;
      this.speakerFacultyFields = false;
    }
  }

  /**
   * Function to submit form data
   * @returns 
   */
  async submit() {
    let action: string = "create-eventCat";
    this.submitted = true;
    if(this.speakEventForm.invalid) {
      return;
    } else {
      await this.dataService.postData(action, this.speakEventForm.value).subscribe((res: any) => {
        console.log(res);
      })
    }
  }
}
