import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../../../../services/data.service';
import { environment } from './../../../../../../../environments/environment';
import { Config } from './../../../../../services/config';

@Component({
  selector: 'app-view-journey-detail',
  templateUrl: './view-journey-detail.component.html',
  styleUrls: ['./view-journey-detail.component.scss']
})
export class ViewJourneyDetailComponent implements OnInit {

  loading: boolean = false;
  imgPath = environment.imgUrl;
  journeyId: any;
  journeyData: any;
  storyType: string = '';

  constructor(
    public config: Config,
    public arouter: ActivatedRoute,
    public dataService: DataService
  ) {
    this.arouter.queryParams.subscribe((res: any) => {
      this.storyType = res?.type
      this.journeyId = res?.id;
    })
   }

  ngOnInit(): void {
    this.getJourneyById()
  }

  async getJourneyById() {
    let action: string = "single-journey";
    await this.dataService.getDataById(action, this.journeyId).subscribe((res: any) => {
      this.journeyData = res?.data;
    })
  }

  back() {
    this.config.navigateBack();
  }
}
