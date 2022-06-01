import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@ChildOne', 'community');
  }

}
