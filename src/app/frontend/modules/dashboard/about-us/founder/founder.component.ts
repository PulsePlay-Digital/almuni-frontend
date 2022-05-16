import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss']
})
export class FounderComponent implements OnInit {
  heading: string = "THE FOUNDER CHANCELLOR";
  constructor() { }

  ngOnInit(): void {
  }

}
