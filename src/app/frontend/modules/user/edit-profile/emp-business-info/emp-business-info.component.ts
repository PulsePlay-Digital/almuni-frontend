import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-emp-business-info",
  templateUrl: "./emp-business-info.component.html",
  styleUrls: ["./emp-business-info.component.scss"],
})
export class EmpBusinessInfoComponent implements OnInit {
  empBuisnessForm: FormGroup | any;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Function to build form data
   */
  buildForm() {
    this.empBuisnessForm = this.fb.group({
      professional_title: [""],
      other_professional_title: [""],
      professional_category: [""],
      current_employer: [""],
      current_office_address: [""],
      business_owner: [""],
      business_name: [""],
    });
  }

  edit() {
    console.log(this.empBuisnessForm.value);
  }
}
