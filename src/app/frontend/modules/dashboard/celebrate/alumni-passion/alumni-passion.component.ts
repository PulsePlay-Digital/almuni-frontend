import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni-passion',
  templateUrl: './alumni-passion.component.html',
  styleUrls: ['./alumni-passion.component.scss']
})
export class AlumniPassionComponent implements OnInit {
  isPassion: boolean = false;
  isShared: boolean = false;
  title: string =  'Post a Passion';
  heading: string = "My Passion";
  type: string = 'passion';

  constructor() { }

  ngOnInit(): void {
  }

  showViewShared() {
    this.isPassion = !this.isPassion;
    this.isShared = false;
  }

  showSeekDetail() {
    this.isShared = !this.isShared;
    this.isPassion = false;
  }
}
