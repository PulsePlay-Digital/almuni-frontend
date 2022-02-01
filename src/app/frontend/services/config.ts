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
   * Home page Gallary
   * @returns 
   */
  gallary() {
    return [
      {
        id: 1,
        src: './assets/gallary01.png'
      },
      {
        id: 2,
        src: './assets/gallary02.png'
      },
      {
        id: 3,
        src: './assets/gallary03.png'
      }
    ];
  }

  /**
   * Alumni stories for home page json
   * @returns 
   */
  alumniStories() {
    return [
      {
        id: 1,
        name: 'Maninder Singh',
        src: './assets/userStory.png',
        alt: 'Side 1',
        title: 'Our Alumni success stories',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        id: 2,
        name: 'Shri Bala ji',
        src: './assets/userStory.png',
        alt: 'Side 2',
        title: 'Our Alumni success stories',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        id: 3,
        name: 'Surinder Singh',
        src: './assets/userStory.png',
        alt: 'Side 3',
        title: 'Our Alumni success stories',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      }
    ];
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
