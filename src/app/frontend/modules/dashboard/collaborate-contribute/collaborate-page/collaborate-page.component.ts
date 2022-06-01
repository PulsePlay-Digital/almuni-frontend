import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborate-page',
  templateUrl: './collaborate-page.component.html',
  styleUrls: ['./collaborate-page.component.scss']
})
export class CollaboratePageComponent implements OnInit {

  heading: string= "Collaborate";
  constructor() { }

  ngOnInit(): void {
  }

}
