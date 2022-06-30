import { Config } from "./../../../../services/config";
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
  addInternalshipForm: FormGroup | any;
  addPlacementForm: FormGroup | any;
  addCorporateForm: FormGroup | any;
  currentUser: any;
  author: any;
  submitted: boolean = false;
  internshipFields: boolean = false;
  placementFields: boolean = false;
  corporateField: boolean = false;

  constructor(
    public config: Config,
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
    // this.buildForm();
    this.buildInternalshipForm();
    this.buildPlacementForm();
    this.buildCorporateForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname  + ((mname == null) ? '' : ' ' + mname ) + ' ' + lname;
  }

  /**
   * Build Forms data
   */
  // buildForm() {
  //   this.addExpertiseForm = this.fb.group({
  //     author: [this.author],
  //     type: ['', Validators.required],
  //     positionsForInternship: [''],
  //     positionsLookingToHire: [''],
  //     hiringExperienceProf: [''],
  //     specialization: [''],
  //     stipend: [''],
  //     packageOffer: [''],
  //     description: [''],
  //     status: ['unapproved']
  //   })
  // }

  buildInternalshipForm() {
    this.addInternalshipForm = this.fb.group({
      user_id: [this.currentUser?.id],
      author: [this.author],
      type: ["internship"],
      positionsForInternship: ['', Validators.required],
      specialization: ['', Validators.required],
      stipend: [''],
    });
  }

  buildPlacementForm() {
    this.addPlacementForm = this.fb.group({
      user_id: [this.currentUser?.id],
      author: [this.author],
      type: ["campusPlacement"],
      positionsLookingToHire: ["", Validators.required],
      hiringExperienceProf: [''],
      packageOffer: [''],
      specialization: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  buildCorporateForm() {
    this.addCorporateForm = this.fb.group({
      user_id: [this.currentUser?.id],
      author: [this.author],
      type: ["corporate"],
      workshopTopic: ["", Validators.required],
      academicCategory: ["", Validators.required],
      dateFrom: ["", Validators.required],
      dateTo: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

 
  /**
   * Get all form controls
   */
  get f() {
    return this.addInternalshipForm.controls;
  }

  get p() {
    return this.addPlacementForm.controls;
  }

  get c() {
    return this.addCorporateForm.controls;
  }


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
      this.buildInternalshipForm();
    } else if(event == 'campusPlacement') {
      this.internshipFields = false;
      this.placementFields = true;
      this.corporateField = false;
      this.buildPlacementForm();
    } else if (event == 'corporate'){
      this.internshipFields = false;
      this.placementFields = false;
      this.corporateField = true;
      this.buildCorporateForm();
    } else if(event == " "){
      this.internshipFields = false;
      this.placementFields = false;
      this.corporateField = false;
      this.buildInternalshipForm();
      this.buildPlacementForm();
      this.buildCorporateForm();
    }
  }

  /**
   * Function to add opportunity data
   * @returns 
   */
  async addInternship() {
    this.submitted = true;
    if (this.addInternalshipForm.invalid){
      return;
    } else {
      let action: string = 'create-opportunity';
      await this.dataService.postData(action, this.addInternalshipForm.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.router.navigate(['/collaborate-contribute/engage-with-society']);
        }
      },error => {
        this.notify.notificationService.openFailureSnackBar(error);
      })
    }
  }

  async addCorporate() {
    this.submitted = true;
    if (this.addPlacementForm.invalid){
      return;
    } else {
      let action: string = 'create-opportunity';
      await this.dataService.postData(action, this.addPlacementForm.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.router.navigate(['/collaborate-contribute/engage-with-society']);
        }
      },error => {
        this.notify.notificationService.openFailureSnackBar(error);
      })
    }
  }

  async addPlacement() {
    this.submitted = true;
    if (this.addPlacementForm.invalid){
      return;
    } else {
      let action: string = 'create-opportunity';
      await this.dataService.postData(action, this.addPlacementForm.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
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
      this.config.navigateBack();
    }
}
