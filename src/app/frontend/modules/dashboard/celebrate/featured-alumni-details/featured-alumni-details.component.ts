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
  constructor(
    public arouter: ActivatedRoute,
    public location: Location
  ) { }

  ngOnInit(): void {
    this.arouter.data.subscribe((res: any) => {
      console.log(res.data)
    })
    this.alumni_details = 
      { id: 1, alumni_name: "new test",  batch_year: "2002-2005", designation: "Developer", firm:'www.fb.com', industry: "demo", location: "Delhi", descripton: 'In my world what we say is innerpeace' }
    
    console.log(this.alumni_details.id)
  }

  navigateBack() {
    this.location.back();
  }

}
