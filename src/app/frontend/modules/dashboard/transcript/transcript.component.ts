import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {
  heading: string = "APPLY FOR TRANSCRIPT";
  constructor() { }

  ngOnInit(): void {
  }

}
