import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Config {
  
  constructor() {

  }

  genderDt() {
    return [
      { id: 1, label: 'Male' },
      { id: 2, label: 'Female' }];
  }

  maritalStatus() {
    return [
      { id: 1, status: 'Single' },
      { id: 2, status: 'Engaged' },
      { id: 3, status: 'Married' },
      { id: 4, status: 'Divorced' },
      { id: 5, status: 'Undisclosed' }
    ]
  }

  bloodGroup() {
    return [
      { id: 1, group: 'A+' },
      { id: 2, group: 'A-' },
      { id: 3, group: 'B+' },
      { id: 4, group: 'B-' },
      { id: 5, group: 'AB+' },
      { id: 6, group: 'AB-' },
      { id: 7, group: 'O+' },
      { id: 8, group: 'O-' },
    ]
  }

  /**
    * Function to allow only Value
    */
   onlyNumber(event: any) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
