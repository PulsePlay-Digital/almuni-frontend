import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CountryService } from "./../../../services/country.service";
import { UserService } from "./../../../services/user.service";
import { Config } from "./../../../services/config";
import { DataService } from "./../../../services/data.service";

@Component({
  selector: "app-search-filter",
  templateUrl: "./search-filter.component.html",
  styleUrls: ["./search-filter.component.scss"],
})
export class SearchFilterComponent implements OnInit {
  @Input() pageType: any;
  searchForm: FormGroup | any;
  getInstitutes: any;
  getBatch: any;
  getFormData: any;
  userRole: any;
  gender: any;
  group: any;
  countries: any;
  profCategory: any;
  primaryArea: any;
  industry: any;
  region: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private userService: UserService,
    private countryService: CountryService,
    private config: Config
  ) {
    this.userRole = this.config?.role;
    this.gender = this.config?.gender;
    this.group = this.config?.bloodGroup;
    this.profCategory = this.config?.professionCategory;
    this.primaryArea = this.config?.functionArea;
    this.industry = this.config?.industryFocus;
    this.region = this.config?.region;
  }

  ngOnInit(): void {
    this.buildForm();
    this.getAllInstitutes();
    this.getAllBatches();
    this.loadCountries();
  }

  buildForm() {
    this.searchForm = this.fb.group({
      first_name: [""],
      last_name: [""],
      email: [""],
      institute_name: [""],
      batch: [""],
      gender: [""],
      blood_group: [""],
      country: [""],
      city: [""],
      current_state: [""],
      professional_category: [""],
      primary_function_area: [""],
      secondary_function_area: [""],
      primary_industry_focus: [""],
      secondary_industry_focus: [""],
      current_region: [""],
      other_industry_focus:[""],
      current_company: [""],
      mobile_number: [""],
      type: this.pageType
    });
  }

  // onChangeValue() {
  //   this.searchForm.valueChanges.subscribe((x: any) => {
  //     this.filteruserData();
  //   });
  // }

  /**
   * Function to get all Institute
   */
  async getAllInstitutes() {
    await this.dataService.getAllInstitutes().subscribe(
      (res: any) => {
        this.getInstitutes = res.Institute;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  public changeCountry(event: any) {
    console.log(event.target.value);
  }

  /**
   * Function to get all batch year
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
   * User search filter
   */
  async searchData() {
    await this.userService
      .filterUsers(this.searchForm.value)
      .subscribe((res: any) => {
        this.userService.filteredData.next(res);
      });
  }
}
