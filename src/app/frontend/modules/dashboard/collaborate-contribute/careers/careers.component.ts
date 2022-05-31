import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  searchData: boolean = false;
  heading: string = "CAREERS AND JOBS";
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchData = !this.searchData;
  }
}
