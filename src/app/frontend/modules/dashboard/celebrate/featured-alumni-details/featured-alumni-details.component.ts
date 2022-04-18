import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featured-alumni-details',
  templateUrl: './featured-alumni-details.component.html',
  styleUrls: ['./featured-alumni-details.component.scss']
})
export class FeaturedAlumniDetailsComponent implements OnInit {

  alumni_details: any;
  type: string = '';
  descriptionHeading: any;

  constructor(
    public arouter: ActivatedRoute,
    public location: Location
  ) { }

  ngOnInit(): void {
    this.arouter.queryParams.subscribe((res: any) => {
      this.descriptionHeading = res.heading;
      this.type = res.type;
    })
    this.alumni_details = 
      { id: 1, alumni_name: "new test", batch_year: "2002-2005", designation: "Developer", firm:'www.fb.com', industry: "demo", location: "Delhi", descripton: 'In my world what we say is innerpeace' }

  }

  navigateBack() {
    this.location.back();
  }

}
