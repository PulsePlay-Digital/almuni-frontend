import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../../../services/data.service';
import { environment } from './../../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { Config } from './../../../../services/config';

@Component({
  selector: 'app-start-new-club',
  templateUrl: './start-new-club.component.html',
  styleUrls: ['./start-new-club.component.scss']
})
export class StartNewClubComponent implements OnInit {
  addClubForm: FormGroup | any;
  submitted: boolean = false;
  profilePic: any;
  image: any;
  imgPath = environment.imgUrl;
  type: any;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public config: Config,
    public aroute: ActivatedRoute,
    public notify: TokenInterceptor
  ) { 
    this.aroute.queryParams.subscribe((params: any) => {
      this.type = params.type;
    })
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addClubForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      clubImage: ['', Validators.required],
      type: this.type
    })
  }

  get f() { return this.addClubForm.controls; }

  onUploadImage(event: any) {
    this.profilePic = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.profilePic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      }
    }
  }

  async addClub() {
    this.submitted = true;
    if(this.addClubForm.invalid) {
      return;
    } else {
      let action = {
        action: 'create-club'
      }
      console.log(this.addClubForm.value)
      let formData = new FormData();
      formData.append('clubImage', (this.profilePic) ? this.profilePic : '');
      formData.append('name', this.addClubForm.value.name);
      formData.append('description', this.addClubForm.value.description);
  
      await this.dataService.postData(action, formData).subscribe((res: any) => {
        if(res.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res.message)
          this.config.navigateBack();
        }
      });
    }
  }

  /**
   * Function to navigate previous page
   */
  back() {
    this.config.navigateBack();
  }
}
