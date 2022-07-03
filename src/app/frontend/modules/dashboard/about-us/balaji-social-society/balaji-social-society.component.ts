import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balaji-social-society',
  templateUrl: './balaji-social-society.component.html',
  styleUrls: ['./balaji-social-society.component.scss']
})
export class BalajiSocialSocietyComponent implements OnInit {
  @Input() heading = "SRI BALAJI UNIVERSITY, PUNE (SBUP)";
  constructor() { }

  ngOnInit(): void {
  }

}
