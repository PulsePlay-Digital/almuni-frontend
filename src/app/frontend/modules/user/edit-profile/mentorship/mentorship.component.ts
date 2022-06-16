import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { Config } from "./../../../../services/config";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-mentorship",
  templateUrl: "./mentorship.component.html",
  styleUrls: ["./mentorship.component.scss"],
})
export class MentorshipComponent implements OnInit {
  mentorForm: FormGroup | any;
  submitted: boolean = false;
  functionArea: any;
  industryFocus: any;
  currentUser: any;
  loading: boolean = false;
  mentorId: any;

  constructor(
    public fb: FormBuilder,
    private config: Config,
    private dataService: DataService,
    private notify: TokenInterceptor
  ) {
    this.functionArea = this.config?.functionArea;
    this.industryFocus = this.config?.industryFocus;
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  async ngOnInit() {
    this.buildform();
    this.loading = true;
    let action :string = "all-profileUsers";
    await this.dataService
    .getDataById(action, this.currentUser?.id)
    .subscribe((res: any) => {
      this.mentorId = res?.Mentorship;
      setTimeout(() => {
        this.mentorForm.patchValue({
          ...res?.Mentorship
        });
      }, 800);
      this.loading = false;
    });
  }

  /**
   * Function to build form data
   */
  buildform() {
    this.mentorForm = this.fb.group({
      id: [this.mentorId?.id],
      Willing_to_provide_Mentorship: ["", Validators.required],
      add_skills: ["", Validators.required],
      primary_function_area: [""],
      secondary_function_area: [""],
      other_function_area: [""],
      primary_industry_focus: [""],
      secondary_industry_focus: [""],
      other_industry_focus: [""],
    });
  }

  /**
   * Get all form controls
   */
  get f() {
    return this.mentorForm.controls;
  }

  async edit() {
    this.submitted = true;
    if (this.mentorForm.invalid) {
      return;
    } else if (this.mentorForm.valid) {
      this.loading = true;
      let action: string = "update-mentorship";
      await this.dataService.updateData(action, this.mentorForm.value).subscribe(
        (res: any) => {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
    }
  }
}
