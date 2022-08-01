import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { Config } from "./../../../../services/config";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-get-featured",
  templateUrl: "./get-featured.component.html",
  styleUrls: ["./get-featured.component.scss"],
})
export class GetFeaturedComponent implements OnInit {
  submitted: boolean | undefined;
  getFeatruedForm: FormGroup | any;
  getInstitutes: any;
  gender: any;
  getBatch: any;
  marStatus: any;
  profilePic: any;
  image: string | ArrayBuffer | null | undefined;
  loading: boolean | undefined;
  constructor(public fb: FormBuilder,
    public config: Config,
    private dataService : DataService,
    private notify: TokenInterceptor
    ) {
    this.gender = this.config?.gender;
    this.marStatus = this.config?.maritalStatus
  }

  ngOnInit(): void {
    this.buildForm();
    this.getAllInstitutes();
    this.getAllBatches();
  }
  /**
   * Function to build form
   */
  buildForm () {
    this.getFeatruedForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      full_name: ['', Validators.required],
      institute_id: ['', Validators.required],
      batchYear_id: ['', Validators.required],
      personal_email: [''],
      office_email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      mobile_number: ['',Validators.required],
      gender: ['',Validators.required],
      employed_entrepreneur: ['', Validators.required],
      current_company: ['', Validators.required],
      current_designation: ['', Validators.required],
      current_location: ['', Validators.required],
      alternate_profession: ['', Validators.required],
      native_city: ['', Validators.required],
      first_job: ['', Validators.required],
      first_salary: ['', Validators.required],
      favourite_book_author: ['', Validators.required],
      personal_hero: ['', Validators.required],
      first_hear: ['', Validators.required],
      marital_status: ['', Validators.required],
      campus_placement:['', Validators.required],
      placement_location: ['', Validators.required],
      if_married_sbup: ['', Validators.required],
      spouse_details: ['', Validators.required],
      life_lessons: ['', Validators.required],
      share_memories: ['', Validators.required],
      share_current_students: ['', Validators.required],
      share_future_students: [''],
      share_message_alumni: [''],
      willing_to_provide_mentorship: ['', Validators.required],
      share_hidden_talents: ['', Validators.required],
      share_social_media: ['', Validators.required],
      overall_rating: ['', Validators.required],
      image: [''],
      status: ['unapproved']
    });
  }

  get f() { return this.getFeatruedForm.controls;}

  async getAllInstitutes() {
    await this.dataService.getAllInstitutes().subscribe(
      (res: any) => {
        this.getInstitutes = res?.Institute;
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  async getAllBatches() {
    await this.dataService.getAllBatches().subscribe(
      (res: any) => {
        this.getBatch = res?.BatchYear;
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  onUploadImage(event: any) {
    this.profilePic = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.profilePic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      }
    }
  }
  
  async submitForm () {
    this.submitted = true;
    this.loading = true;
    if(this.getFeatruedForm.invalid) {
      return;
    } else {
      let action = {
        action: 'create-getFeatured'
      }
      let formData = new FormData();
      formData.append('image', (this.profilePic) ? this.profilePic : '');
      formData.append('email', this.getFeatruedForm?.value?.email);
      formData.append('full_name', this.getFeatruedForm?.value?.full_name);
      formData.append('institute_id', this.getFeatruedForm?.value?.institute_id);
      formData.append('batchYear_id', this.getFeatruedForm?.value?.batchYear_id);
      formData.append('personal_email', this.getFeatruedForm?.value?.personal_email);
      formData.append('office_email', this.getFeatruedForm?.value?.office_email);
      formData.append('mobile_number', this.getFeatruedForm?.value?.mobile_number);
      formData.append('gender', this.getFeatruedForm?.value?.gender);
      formData.append('employed_entrepreneur', this.getFeatruedForm?.value?.employed_entrepreneur);
      formData.append('current_company', this.getFeatruedForm?.value?.current_company);
      formData.append('current_designation', this.getFeatruedForm?.value?.current_designation);
      formData.append('current_location', this.getFeatruedForm?.value?.current_location);
      formData.append('alternate_profession', this.getFeatruedForm?.value?.alternate_profession);
      formData.append('native_city', this.getFeatruedForm?.value?.native_city);
      formData.append('first_job', this.getFeatruedForm?.value?.first_job);
      formData.append('first_salary', this.getFeatruedForm?.value?.first_salary);
      formData.append('favourite_book_author', this.getFeatruedForm?.value?.favourite_book_author);
      formData.append('personal_hero', this.getFeatruedForm?.value?.personal_hero);
      formData.append('first_hear', this.getFeatruedForm?.value?.first_hear);
      formData.append('marital_status', this.getFeatruedForm?.value?.marital_status);
      formData.append('campus_placement', this.getFeatruedForm?.value?.campus_placement);
      formData.append('placement_location', this.getFeatruedForm?.value?.placement_location);
      formData.append('if_married_sbup', this.getFeatruedForm?.value?.if_married_sbup);
      formData.append('spouse_details', this.getFeatruedForm?.value?.spouse_details);
      formData.append('life_lessons', this.getFeatruedForm?.value?.life_lessons);
      formData.append('share_memories', this.getFeatruedForm?.value?.share_memories);
      formData.append('share_current_students', this.getFeatruedForm?.value?.share_current_students);
      formData.append('share_future_students', this.getFeatruedForm?.value?.share_future_students);
      formData.append('share_message_alumni', this.getFeatruedForm?.value?.share_message_alumni);
      formData.append('willing_to_provide_mentorship', this.getFeatruedForm?.value?.willing_to_provide_mentorship);
      formData.append('share_hidden_talents', this.getFeatruedForm?.value?.share_hidden_talents);
      formData.append('share_social_media', this.getFeatruedForm?.value?.share_social_media);
      formData.append('overall_rating', this.getFeatruedForm?.value?.overall_rating);  
      formData.append('status', this.getFeatruedForm?.value?.status);  
      await this.dataService.postData(action, formData).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.loading = false;
        }
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      });
    }
  }
}
