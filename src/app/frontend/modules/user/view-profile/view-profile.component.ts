import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { CountryService } from "src/app/frontend/services/country.service";
import { DataService } from "src/app/frontend/services/data.service";
import { AuthService } from "./../../../../frontend/services/auth.service";
import { UserService } from "./../../../../frontend/services/user.service";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.component.html",
  styleUrls: ["./view-profile.component.scss"],
})
export class ViewProfileComponent implements OnInit {
  token: any;
  user: any;
  countries: any;
  getBatch: any;
  getInstitutes: any;
  heading:string = "GENERAL INFORMATION";
  constructor(
    private authService: AuthService,
    public userService: UserService,
    public countryService: CountryService,
    public dataService: DataService
  ) {
    // Get token
    this.token = this.authService.getToken();
  }

  ngOnInit(): void {
    this.getUserById();
  }

  /**
   * Function to get user by its id
   */
   async getUserById() {
    await this.userService.getUsersById(this.token).subscribe((res: any) => {
      res.birth_date = moment(new Date()).format('DD-MM-YYYY ');
      this.user = res;
    })
  }

  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

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
}
