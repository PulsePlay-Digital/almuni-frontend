import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-alumni',
  templateUrl: './shared-alumni.component.html',
  styleUrls: ['./shared-alumni.component.scss']
})
export class SharedAlumniComponent implements OnInit {
  @Input() heading: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.heading)
  }

}
