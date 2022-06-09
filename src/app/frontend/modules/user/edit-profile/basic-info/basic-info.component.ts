import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from './../../../../services/config';
import { CountryService } from './../../../../services/country.service';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  basicInfoForm: FormGroup | any;
  getInstitutes: any;
  getBatch: any;
  gender: any;
  maritalStatus: any;
  bloodGroup: any;
  countries: any;
  submitted: boolean = false;
  showOpt: boolean = false;
  region: any;
  constructor(
    public fb: FormBuilder,
    public countryService: CountryService,
    public dataService: DataService,
    private config: Config
  ) { 
    this.gender = this.config.gender;
    this.maritalStatus = this.config.maritalStatus;
    this.bloodGroup = this.config.bloodGroup;
    this.region = this.config.region;
  }

  ngOnInit(): void {
    this.buildForm();
    this.loadCountries();
    this.getAllBatches();
    this.getAllInstitutes();
  }

  /**
   * Build form data
   */
   buildForm() {
    this.basicInfoForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      institute_id: ['', Validators.required],
      batchYear_id: ['', Validators.required],
      institute_wise_roll: [''],
      gender: ['', Validators.required],
      marital_status: [''],
      blood_group: ['', Validators.required],
      mobile_code: ['', Validators.required],
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      landline_code: [''],
      landline_number: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      city: ['', Validators.required],
      showMobile: [this.showOpt, Validators.required],
      country: ['', Validators.required],
      country_code: ['', Validators.required],
      personal_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      office_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      birth_date: ['', Validators.required],
      anniversary_date: ['', Validators.required],
      current_address: ['', Validators.required],
      current_country: ['', Validators.required],
      other_country: [''],
      current_region: ['', Validators.required],
      other_region: [''],
      current_state: ['', Validators.required],
      current_city: ['', Validators.required],
      permanent_address: ['', Validators.required],
      permanent_country: ['', Validators.required],
      other_permanentCountry: [''],
      permanent_state: ['', Validators.required],
      permanent_city: ['', Validators.required],
      linkedin_id: ['', Validators.required],
      twitter_id: ['', Validators.required],
      skype_id: ['', Validators.required],
      facebook_id: ['', Validators.required],
      instagram_id: ['', Validators.required],
      council_member_designation: ['', Validators.required],
      role: [0]
    });
  }

  /**
   * Get form controls
   */
  get f() {
    return this.basicInfoForm.controls;
  }

  /**
   * Get all countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  /**
   * Function to change country
   * @param event 
   */
  public changeCountry(event: any) {
    console.log(event.target.value);
  }

  /**
   * Function to get all institutes
   */
  async getAllInstitutes() {
    await this.dataService.getAllInstitutes().subscribe((res: any) => {
      this.getInstitutes = res.Institute;
    }, error => {
      console.log(error)
    });
  }

  /**
   * Function to get all Batches
   */
  async getAllBatches() {
    await this.dataService.getAllBatches().subscribe((res: any) => {
      this.getBatch = res?.BatchYear;
    }, error => {
      console.log(error)
    });
  }

  edit() {
    this.submitted = true;
    if (this.basicInfoForm.invalid) {
      return;
    } else if (this.basicInfoForm.valid) {
      console.log(this.basicInfoForm.value);
    }
  }

}
