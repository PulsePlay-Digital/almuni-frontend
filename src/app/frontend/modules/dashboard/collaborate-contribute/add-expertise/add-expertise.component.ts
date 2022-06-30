import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Config } from "./../../../../services/config";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-add-expertise",
  templateUrl: "./add-expertise.component.html",
  styleUrls: ["./add-expertise.component.scss"],
})
export class AddExpertiseComponent implements OnInit {
  addSeminarForm: FormGroup | any;
  addFacultyForm: FormGroup | any;
  addWorkshopForm: FormGroup | any;
  currentUser: any;
  author: any;
  workShopField: boolean = false;
  facultyFields: boolean = false;
  seminarFields: boolean = false;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    public config: Config,
    private dataService: DataService,
    private notify: TokenInterceptor,
    private router: Router
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
  }

  ngOnInit(): void {
    this.buildSeminarForm();
    this.buildFacultyForm();
    this.buildWorkshopForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;
  }

  buildSeminarForm() {
    this.addSeminarForm = this.fb.group({
      user_id: [this.currentUser?.id],
      author: [this.author],
      type: ["seminar"],
      eventName: ["", Validators.required],
      participationType: ["", Validators.required],
      dateTime: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  buildFacultyForm() {
    this.addFacultyForm = this.fb.group({
      user_id: [this.currentUser?.id],
      author: [this.author],
      type: ["faculty"],
      workshopTopic: ["", Validators.required],
      academicCategory: ["", Validators.required],
      dateFrom: ["", Validators.required],
      dateTo: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  buildWorkshopForm() {
    this.addWorkshopForm = this.fb.group({
      user_id: [this.currentUser?.id],
      author: [this.author],
      type: ["workshops"],
      dateFrom: ["", Validators.required],
      dateTo: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
  /**
   * Get all form controls
   */
  get f() {
    return this.addFacultyForm.controls;
  }

  get s() {
    return this.addSeminarForm.controls;
  }

  get w() {
    return this.addWorkshopForm.controls;
  }

  // get s() { return this.addSeminarForm.controls; }

  /**
   * Change select data
   * @param e
   */
  changeType(e: any) {
    let event = e?.target?.value;
    console.log(event);
    if (event == "seminar") {
      this.seminarFields = true;
      this.facultyFields = false;
      this.workShopField = false;
      this.buildSeminarForm();
    } else if (event == "faculty") {
      this.seminarFields = false;
      this.facultyFields = true;
      this.workShopField = false;
      this.buildFacultyForm();
    } else if (event == "workshops") {
      this.seminarFields = false;
      this.facultyFields = false;
      this.workShopField = true;
      this.buildWorkshopForm();
    } else if (event == " ") {
      this.seminarFields = false;
      this.facultyFields = false;
      this.workShopField = false;
      this.buildSeminarForm();
      this.buildFacultyForm();
      this.buildWorkshopForm();
    }
  }

  /**
   * Function to Add Expertise
   * @returns
   */
  async addSeminar() {
    this.submitted = true;
    if (this.addSeminarForm.invalid) {
      return;
    } else {
      let action: string = "create-expertise";
      await this.dataService
        .postData(action, this.addSeminarForm?.value)
        .subscribe(
          (res: any) => {
            if (res?.status == 200) {
              this.notify.notificationService.openSuccessSnackBar(res?.message);
              this.router.navigate([
                "/collaborate-contribute/engage-with-society",
              ]);
            }
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
          }
        );
    }
  }

  async addFaculty() {
    this.submitted = true;
    if (this.addFacultyForm.invalid) {
      return;
    } else {
      let action: string = "create-expertise";
      await this.dataService
        .postData(action, this.addFacultyForm?.value)
        .subscribe(
          (res: any) => {
            if (res?.status == 200) {
              this.notify.notificationService.openSuccessSnackBar(res?.message);
              this.router.navigate([
                "/collaborate-contribute/engage-with-society",
              ]);
            }
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
          }
        );
    }
  }
  async addWorkshop() {
    this.submitted = true;
    if (this.addWorkshopForm.invalid) {
      return;
    } else {
      let action: string = "create-expertise";
      await this.dataService
        .postData(action, this.addWorkshopForm.value)
        .subscribe(
          (res: any) => {
            if (res?.status == 200) {
              this.notify.notificationService.openSuccessSnackBar(res?.message);
              this.router.navigate([
                "/collaborate-contribute/engage-with-society",
              ]);
            }
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
          }
        );
    }
  }
  /**
   * Function to redirect previous page
   */
  back() {
    this.config.navigateBack();
  }
}
