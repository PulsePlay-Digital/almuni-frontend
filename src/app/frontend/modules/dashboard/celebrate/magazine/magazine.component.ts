import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss']
})
export class MagazineComponent implements OnInit {

  constructor(
    public location: Location
  ) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

}
