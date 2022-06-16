import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/frontend/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentUser;
  constructor(private dataService: DataService) {
    if (localStorage.hasOwnProperty("currentUser")) {
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
    }
   }

  ngOnInit(): void {
  }
  /**
   * Scroll target Section
   * @param sectionId
   */
   target(sectionId: any) {
    this.dataService.scrollSection.next(sectionId);
  }
}
