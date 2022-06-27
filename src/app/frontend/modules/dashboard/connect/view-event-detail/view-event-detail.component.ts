import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "./../../../../services/data.service";
import { environment } from "./../../../../../../environments/environment";
import { Config } from "./../../../../services/config";

@Component({
  selector: "app-view-event-detail",
  templateUrl: "./view-event-detail.component.html",
  styleUrls: ["./view-event-detail.component.scss"],
})
export class ViewEventDetailComponent implements OnInit {
  event_detail: any;
  imgPath = environment?.imgUrl;
  currentUser: any;

  constructor(
    private arouter: ActivatedRoute,
    public config: Config,
    private dataService: DataService) {
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      }
    //Get query params
    this.arouter.queryParams.subscribe((res: any) => {
      this.event_detail = res;
    });
  }

  ngOnInit(): void {}

  async attendHost() {
    let action: string = "create-eventHost";
    let params = {
      user_id: this.currentUser?.id,
      attend:0
    } 
    await this.dataService.postData(action, params).subscribe((res: any) => {
      console.log(res);
    })
  }
}
