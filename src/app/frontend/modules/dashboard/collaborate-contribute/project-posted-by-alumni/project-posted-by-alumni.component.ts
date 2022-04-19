import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-project-posted-by-alumni',
  templateUrl: './project-posted-by-alumni.component.html',
  styleUrls: ['./project-posted-by-alumni.component.scss']
})
export class ProjectPostedByAlumniComponent implements OnInit {
specialProjectByAlumni: any;
loading: boolean = false;

  constructor(
    public dataService: DataService
    ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getSpecialAllProject();
  }

  async getSpecialAllProject() {
    let action: string = 'all-project';
    await this.dataService.getData(action).subscribe((result: any) => {
      this.specialProjectByAlumni = result.data;
      this.loading = false;
    })
  }
}
