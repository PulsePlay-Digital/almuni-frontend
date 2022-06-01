import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {
heading: string = "Community";
  constructor() { }

  ngOnInit(): void {
  }

}
