import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Config } from "./../../../services/config";
import { DataService } from "./../../../services/data.service";

@Component({
  selector: "app-search-filter",
  templateUrl: "./search-filter.component.html",
  styleUrls: ["./search-filter.component.scss"],
})
export class SearchFilterComponent implements OnInit {
  searchForm: FormGroup | any;
  getInstitutes: any;
  getBatch: any;
  getFormData: any;
  userRole: any;

  constructor(public fb: FormBuilder, 
    public dataService: DataService,
    public config: Config) {
      this.userRole = this.config.role();
     }
  

  ngOnInit(): void {
    this.buildForm();
    // this.onChangeValue();
    // this.getAllInstitutes();
    // this.getAllBatches();
    // this.filteruserData();
  }

  buildForm() {
    this.searchForm = this.fb.group({
      first_name: [""],
      last_name:[""],
      bloodGroop:[""],
      city:[""],
      country:[""],
      primaryArea:[""],
      secondaryArea:[""],
      primaryIndustry:[""],
      secondaryIndusrty:[""],
      email: [""],
      mobile_number: [""],
      institute_id: [""],
      batchYear_id: [""],
      is_verified: [""],
      current_company: [""],
      reg_date_from: [""],
      reg_date_to: [""],
      otherRegion:[""],
      role:['']  
      });
  }

  onChangeValue() {
    this.searchForm.valueChanges.subscribe((x: any) => {
      this.filteruserData()
    });
  }

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
  async filteruserData() {
    // await this.userService.filterUsers(this.searchForm.value).subscribe((res: any) => {
    //   this.userService.filteredData.next(res);
    // })
  }
}
