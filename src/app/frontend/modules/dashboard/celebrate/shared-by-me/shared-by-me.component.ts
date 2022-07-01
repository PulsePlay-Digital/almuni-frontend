import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-shared-by-me',
  templateUrl: './shared-by-me.component.html',
  styleUrls: ['./shared-by-me.component.scss']
})
export class SharedByMeComponent implements OnInit {
  @Input() title: any;
  @Input() type: any;
  form: FormGroup | any;
  file: any;
  image: any;
  submitted: boolean = false;
  currentUser: any;
  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public notify: TokenInterceptor
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: this.type,
      institute: ['', Validators.required],
      photo: ['', Validators.required],
      status: ['unapproved']
    });
  }

  /**
   * Get all form controls
   */
  get f() { return this.form.controls;}


  onUploadImage(event: any) {
    this.file = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.file = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      }
    }
  }

  /**
   * Function to submit story
   * @returns 
   */
  async submit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    } else {
      let action = {
        action: 'create-journey'
      }
      let formData = new FormData();
      formData.append('user_id', this.currentUser?.id);  
      formData.append('photo', (this.file) ? this.file : '');
      formData.append('title', this.form?.value?.title); 
      formData.append('type', this.form?.value?.type); 
      formData.append('institute', this.form?.value?.institute); 
      formData.append('description', this.form?.value?.description);  
      
      await this.dataService.postData(action, formData).subscribe((res: any) => {
        if(res.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res.message);
          location.reload();
        }
      }, error => {
        this.notify.notificationService.openSuccessSnackBar(error);
      })
    }
  }
}
