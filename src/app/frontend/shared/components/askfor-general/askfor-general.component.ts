import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-askfor-general',
  templateUrl: './askfor-general.component.html',
  styleUrls: ['./askfor-general.component.scss']
})
export class AskforGeneralComponent implements OnInit {
  heading:string= "ASK FOR GENERAL INFO OR SUPPORT";
  constructor() { }

  ngOnInit(): void {
  }

}
