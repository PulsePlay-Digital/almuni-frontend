import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup | any;
  countries: any;
  getBatch: any;
  getInstitutes: any;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public countryService: CountryService
  ) { }

  async ngOnInit() {
    this.buildForm();
    this.loadCountries();
    this.getAllBatches();
    this.getAllInstitutes();
  }

  buildForm() {
    this.form = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      institute: ['', Validators.required],
      bYear: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      countryregion: ['', Validators.required],
      code: ['', Validators.required],
      mobile: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cmpny: ['', Validators.required],
      designation: ['', Validators.required],
      questions: ['', Validators.required],
      ans: ['', Validators.required]
      // recaptcha: ['', Validators.required]
    });
  }
/**
 * Function to get all Countries
 */
  public loadCountries() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      console.log(data);
    });
  }

  public changeCountry(event: any) {
    console.log(event.target.value);
    this.form.controls['code'].setValue(event.target.value);
  }

  /**
   * Function to get all Batches 
   */
  async getAllBatches() {
    await this.dataService.getAllBatches().subscribe((res: any) => {
      this.getBatch = res.BatchYear;
    }, error => {
      console.log(error)
    });
  }
  /**
   * Function to get all Institutes
   */
  async getAllInstitutes() {
    await this.dataService.getAllInstitutes().subscribe((res: any) => {
      this.getInstitutes = res.Institute;
    }, error => {
      console.log(error)
    });
  }
}
