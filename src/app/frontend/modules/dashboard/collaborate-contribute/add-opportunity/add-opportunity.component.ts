import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.scss']
})
export class AddOpportunityComponent implements OnInit {

  addExpertiseForm : FormGroup | any;
  currentUser: any;
  author: any;
  submitted: boolean = false;
  internshipFields: boolean = false;
  placementFields: boolean = false;
  corporateField: boolean = false;

  constructor(
    public _location: Location,
    public fb: FormBuilder,
    public dataService: DataService,
    public notify: TokenInterceptor,
    public router: Router
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.buildForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname  + ((mname == null) ? '' : ' ' + mname ) + ' ' + lname;
  }

  /**
   * Build Forms data
   */
  buildForm() {
    this.addExpertiseForm = this.fb.group({
      author: [this.author],
      type: ['', Validators.required],
      positionsForInternship: [''],
      positionsLookingToHire: [''],
      hiringExperienceProf: [''],
      specialization: [''],
      stipend: [''],
      packageOffer: [''],
      description: ['']
    })
  }

  /**
   * Get all forms controls
   */
  get f() { return this.addExpertiseForm.controls; }

  /**
   * On Change select 
   * @param e 
   */
  changeType(e: any) {
    let event = e?.target?.value;
    if (event == 'internship') {
      this.internshipFields = true;
      this.placementFields = false;
      this.corporateField = false;
    } else if(event == 'campusPlacement') {
      this.internshipFields = false;
      this.placementFields = true;
      this.corporateField = false;
    } else if (event == 'corporate'){
      this.internshipFields = false;
      this.placementFields = false;
      this.corporateField = true;
    }
  }

  /**
   * Function to add opportunity data
   * @returns 
   */
  async addExpertise() {
    this.submitted = true;
    if (this.addExpertiseForm.invalid){
      return;
    } else {
      let action: string = 'create-opportunity';
      await this.dataService.postData(action, this.addExpertiseForm.value).subscribe((res: any) => {
        console.log(res);
        if(res.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res.message);
          this.router.navigate(['/collaborate-contribute/engage-with-society']);
        }
      },error => {
        this.notify.notificationService.openFailureSnackBar(error);
      })
    }
  }

  /**
   * Function to redirect previous page 
   */
  navigateBack() {
    this._location.back();
  }
}
