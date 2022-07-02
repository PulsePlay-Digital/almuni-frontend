import { Component, Input, OnInit } from "@angular/core";
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
  @Input() profileData: any;
  mentorForm: FormGroup | any;
  submitted: boolean = false;
  functionArea: any;
  industryFocus: any;
  currentUser: any;
  loading: boolean = false;
  mentorId: any;
isCurrentUser:boolean=false;
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
    setTimeout(() => {
      if(this.profileData.Users.id == this.currentUser.id) {
        this.isCurrentUser =true;
      }else {
        this.isCurrentUser=false;
      }
      this.mentorForm.patchValue({
        ...this.profileData?.Mentorship
      });
      this.loading = false;
    }, 2000);
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
   
  }
}
