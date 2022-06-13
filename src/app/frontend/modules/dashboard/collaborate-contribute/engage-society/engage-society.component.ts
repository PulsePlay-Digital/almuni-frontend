import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engage-society',
  templateUrl: './engage-society.component.html',
  styleUrls: ['./engage-society.component.scss']
})
export class EngageSocietyComponent implements OnInit {
  postedOpportunity: boolean = false;
  postedExpertise: boolean = false;
  heading: string = "ENGAGE WITH SRI BALAJI UNIVERSITY";
  constructor() { }

  ngOnInit(): void {
  }

  viewOpportunity() {
    this.postedOpportunity = !this.postedOpportunity;
    this.postedExpertise = false;
  }

  viewExpertise() {
    this.postedExpertise = !this.postedExpertise;
    this.postedOpportunity = false
  }
}
