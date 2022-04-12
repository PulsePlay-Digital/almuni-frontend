import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speacial-projects',
  templateUrl: './speacial-projects.component.html',
  styleUrls: ['./speacial-projects.component.scss']
})
export class SpeacialProjectsComponent implements OnInit {

  searchData: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  /**
   * Function to show/hide search data
   */
  search() {
    this.searchData = !this.searchData;
  }
}
