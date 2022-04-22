import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { environment } from './../../../../../../environments/environment';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-events-at-balaji',
  templateUrl: './events-at-balaji.component.html',
  styleUrls: ['./events-at-balaji.component.scss']
})
export class EventsAtBalajiComponent implements OnInit {
  imgPath: any;
  loading: boolean = false;
  speakEventForm: FormGroup | any;
  pastEvent: any;
  upcomingEvent: any;
  workShopField: boolean = false;
  speakerFacultyFields: boolean = false;
  submitted: boolean = false;

  constructor(public fb: FormBuilder, public dataService: DataService, public notify: TokenInterceptor) { 
    this.imgPath = environment.imgUrl;
  }

  ngOnInit(): void {
    this.loading = true;
    this.getAllPastEvents();
    this.getAllUpcomingEvents();
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

  async getAllPastEvents() {
    let action: string = "all-event";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.data.filter((item: any) => {
            let commingDate = item?.date;
            let currentDate = moment(moment.now()).format("YYYY-MM-DD");
            if (moment(currentDate).isAfter(commingDate) == true) {
              return item;
            }
          });
        })
      )
      .subscribe((res: any) => {
          if (res) {
            this.pastEvent = res;
            this.loading = false;
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
        }
      );
  }
  /**
   * Function to Get all upcoming events
   */
  async getAllUpcomingEvents() {
    let action: string = "all-event";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.data.filter((item: any) => {
            let commingDate = item?.date;
            let currentDate = moment(moment.now()).format("YYYY-MM-DD");
            if (moment(currentDate).isSameOrBefore(commingDate) == true) {
              return item;
            }
          });
        })
      )
      .subscribe((res: any) => {
          if (res) {
            this.upcomingEvent = res;
            this.loading = false;
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
        }
      );
  }
}
