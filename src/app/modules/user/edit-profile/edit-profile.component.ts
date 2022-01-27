import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profilePic: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.profilePic = event.target.files[0];
    if (this.profilePic) {
      let formData = new FormData();
      formData.append('profilePic', (this.profilePic) ? this.profilePic : '');
    }
  }
}
