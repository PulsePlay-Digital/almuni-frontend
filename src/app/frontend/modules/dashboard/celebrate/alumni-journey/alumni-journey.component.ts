import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni-journey',
  templateUrl: './alumni-journey.component.html',
  styleUrls: ['./alumni-journey.component.scss']
})
export class AlumniJourneyComponent implements OnInit {

  isPosted: boolean = false;
  isShared: boolean = false;
  title: string =  'Post a Story';
  heading: string = "My Story";
  type: string = 'journey';
  
  constructor() { }

  ngOnInit(): void {
  }

  showViewShared() {
    this.isPosted = !this.isPosted;
    this.isShared = false;
  }

  showSeekDetail() {
    this.isShared = !this.isShared;
    this.isPosted = false;
  }
}
