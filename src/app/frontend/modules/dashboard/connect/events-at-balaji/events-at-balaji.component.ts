import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(public fb: FormBuilder ) { }

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
    this.speakEventForm = this.fb.group({

    });
  }

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
}
