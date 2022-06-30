import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { environment } from "./../../../../../../environments/environment";
import { DataService } from "./../../../../services/data.service";
import * as moment from "moment";

@Component({
  selector: "app-events-at-balaji",
  templateUrl: "./events-at-balaji.component.html",
  styleUrls: ["./events-at-balaji.component.scss"],
})
export class EventsAtBalajiComponent implements OnInit {
  imgPath: any;
  loading: boolean = false;
  speakEventForm: FormGroup | any;
  workshopForm: FormGroup | any;
  facultyForm: FormGroup | any;
  workShopField: boolean = false;
  speakerFacultyFields: boolean = false;
  submitted: boolean = false;
  onChangeEvent: any;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {
    this.imgPath = environment.imgUrl;
  }

  ngOnInit(): void {
    this.loading = true;
    this.buildWorkshopForm();
    this.buildFacultyForm();
  }

  /**
   * Build Form Data
   */
  buildWorkshopForm() {
    this.workshopForm = this.fb.group({
      // event_id: [3],
      // eventName: [""],
      eventCategory: ["workshop"],
      topicWorkshop: ["", Validators.required],
      academicCategory: ["", Validators.required],
      dateFrom: ["", Validators.required],
      dateTo: ["", ],
      description: ["", Validators.required],
    });
  }

  buildFacultyForm() {
    this.facultyForm = this.fb.group({
      eventCategory: [this.onChangeEvent == "faculty" ? "faculty" : "speaker"],
      dateFrom: ["", Validators.required],
      dateTo: ["",],
      description: ["", Validators.required],
    },
    { validator: this.dateLessThan('dateFrom', 'dateTo') }
    );
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
      if (group.controls[to].value === '') {
        return {};
      }
      let f = group.controls[from];
      let t = group.controls[to];
      let startTime = moment(
        moment(f.value).format('YYYY-MM-DD')
      );
      let endTime = moment(
        moment(t.value).format('YYYY-MM-DD')
      );
      if (startTime.isSameOrBefore(endTime)) {
        return {};
      } else {
        return {
          dates: 'Date from should be less than Date to'
        };
      }
    };
  }
  /**
   * Get all Form controls
   */
  get f() {
    return this.workshopForm.controls;
  }
  get s() {
    return this.facultyForm.controls;
  }

  /**
   * On change Category show/hide fields
   * @param e
   */
  selectCategory(e: any) {
    let event = e?.target?.value;
    this.onChangeEvent = event;
    console.log(this.onChangeEvent);
    if (event == "workshop") {
      this.workShopField = true;
      this.speakerFacultyFields = false;
      this.buildWorkshopForm();
    } else if (event == "faculty" || event == "speaker") {
      this.speakerFacultyFields = true;
      this.workShopField = false;
      this.buildFacultyForm();
    } else {
      this.workShopField = false;
      this.speakerFacultyFields = false;
      this.buildWorkshopForm();
      this.buildFacultyForm();
    }
  }

  /**
   * Function to submit form data
   * @returns
   */
  async addWorkshop() {
    let action: string = "create-eventCat";
    this.submitted = true;
    if (this.workshopForm?.invalid) {
      return;
    } else {
      await this.dataService
        .postData(action, this.workshopForm?.value)
        .subscribe(
          (res: any) => {
            if (res?.status == 200) {
              this.notify.notificationService.openSuccessSnackBar(res?.message);
              location.reload();
            }
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
          }
        );
    }
  }

  async addFaculty() {
    let action: string = "create-eventCat";
    this.submitted = true;
    if (this.facultyForm.invalid) {
      return;
    } else {
      await this.dataService.postData(action, this.facultyForm.value).subscribe(
        (res: any) => {
          if (res?.status == 200) {
            this.notify.notificationService.openSuccessSnackBar(res?.message);
            location.reload();
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
        }
      );
    }
  }
}
