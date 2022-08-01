import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-continuous-learning',
  templateUrl: './continuous-learning.component.html',
  styleUrls: ['./continuous-learning.component.scss']
})
export class ContinuousLearningComponent implements OnInit {


  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.scrollSection.subscribe((res: any) => {
      if (res) {
        this.scrollById(res);
      }
    });
  }

  /**
   * Function to scroll by Id
   * @param params
   */
  scrollById(params: any) {
    let target = document.getElementById(params) as HTMLInputElement;
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
