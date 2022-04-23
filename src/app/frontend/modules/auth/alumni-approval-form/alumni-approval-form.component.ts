import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms';
import { Router } from "@angular/router";
import { TokenInterceptor } from "src/app/frontend/core/token.interceptor";
import { AuthService } from "./../../../../frontend/services/auth.service";
import { Config } from "./../../../../frontend/services/config";
import { CountryService } from "./../../../../frontend/services/country.service";
import { DataService } from "./../../../../frontend/services/data.service";


@Component({
  selector: 'app-alumni-approval-form',
  templateUrl: './alumni-approval-form.component.html',
  styleUrls: ['./alumni-approval-form.component.scss']
})
export class AlumniApprovalFormComponent implements OnInit {
  approvalForm: FormGroup | any;
  countries: any;
  getBatch: any;
  questions: any;
  getInstitutes: any;
  submitted: boolean = false;
  siteKey = "6LcX9pEdAAAAAOKoswl3Wl3bV6sGBeuk7SdGRkQt";

  constructor(
    public fb: FormBuilder,
    public countryService: CountryService,
    public dataService: DataService,
    public authService: AuthService,
    public notify: TokenInterceptor,
    private config: Config,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadCountries();
    this.getAllBatches();
    this.getAllInstitutes();
  }

  buildForm() {
    this.approvalForm = this.fb. group (
      {
        name: ["", Validators.required],
        fatherName: ["", Validators.required],
        instituteName: ["", Validators.required],
        batch_year: ["", Validators.required],
        mobile_number: ["",[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10),Validators.maxLength(10)]],
        birth_date: ["", Validators.required],
        email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
        rollNumber: [""],
        address: ["", Validators.required],
      }
    );
  }

  /**
   * Get all form controls
   */
  get f() {
    return this.approvalForm.controls;
  }

  /**
   * Function to get all Countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }


 
  /**
   * Function to get all Batches
   */
  async getAllBatches() {
    await this.dataService.getAllBatches().subscribe(
      (res: any) => {
        this.getBatch = res.BatchYear;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Function to get all Institutes
   */
  async getAllInstitutes() {
    await this.dataService.getAllInstitutes().subscribe(
      (res: any) => {
        this.getInstitutes = res.Institute;
        console.log(this.getInstitutes)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Function to register user
   */
  async submitForm() {
    this.submitted = true;
    if (this.approvalForm.invalid) {
      return;
    } else {
      let params = this.approvalForm.value;
     console.log(params)
    }
  }
}



