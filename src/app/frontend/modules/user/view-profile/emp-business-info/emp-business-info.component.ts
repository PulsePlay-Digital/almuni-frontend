import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DataService } from "./../../../../services/data.service";
import { Config } from "./../../../../services/config";
import { TokenInterceptor } from "./../../../../core/token.interceptor";

@Component({
  selector: "app-emp-business-info",
  templateUrl: "./emp-business-info.component.html",
  styleUrls: ["./emp-business-info.component.scss"],
})
export class EmpBusinessInfoComponent implements OnInit {
  @Input() profileData: any;
  empBuisnessForm: FormGroup | any;
  professionalTitle: any;
  professionCategory: any;
  currentUser: any;
  loading: boolean = false;
  empId: any;
isCurrentUser:boolean=false;
  constructor(
    public fb: FormBuilder,
    public config: Config,
    public dataService: DataService,
    public notify: TokenInterceptor
    ) {
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      }
    }

  async ngOnInit() {
    this.buildForm();
    this.professionalTitle = this.config?.professionalTitle;
    this.professionCategory = this.config?.professionCategory;
    this.loading = true;
    setTimeout(() => {
      if(this.profileData.Users.id == this.currentUser.id) {
        this.isCurrentUser =true;
      }else {
        this.isCurrentUser=false;
      }
      this.empBuisnessForm.patchValue({
        ...this.profileData?.Employment
      });
      this.loading = false;
    }, 2000);
  }

  /**
   * Function to build form data
   */
  buildForm() {
    this.empBuisnessForm = this.fb.group({
      id: [this.empId?.id],
      professional_title: [""],
      other_professional_title: [""],
      professional_category: [""],
      current_employer: [""],
      current_office_address: [""],
      business_owner: [""],
      business_name: [""],
    });
  }

  async edit() {
  }
}
