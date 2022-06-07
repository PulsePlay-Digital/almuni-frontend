import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/frontend/services/data.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
  heading:string= "SITE MAP";
  constructor(   public dataService: DataService) { }

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
