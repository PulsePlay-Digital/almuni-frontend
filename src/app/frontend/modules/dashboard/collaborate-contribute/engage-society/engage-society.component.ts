import { Component, OnInit } from "@angular/core";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-engage-society",
  templateUrl: "./engage-society.component.html",
  styleUrls: ["./engage-society.component.scss"],
})
export class EngageSocietyComponent implements OnInit {
  postedOpportunity: boolean = false;
  postedExpertise: boolean = false;
  allEvent: any;
  allExpertise: any;
  allOpportunity: any;
  availableEventCount: any;
  currentUser: any;
  constructor(
    private dataService: DataService,
    private notify: TokenInterceptor
  ) {
    this.currentUser = JSON?.parse(localStorage?.getItem("currentUser") || "");
  }

  ngOnInit(): void {
    this.countAllExpertise();
    this.countAllOpportunity();
    this.countAvailableEvent();
  }

  viewOpportunity() {
    this.postedOpportunity = true;
    this.postedExpertise = false;
  }

  viewExpertise() {
    this.postedExpertise = true;
    this.postedOpportunity = false;
  }

  async countAllExpertise() {
    let action: string = "count-expertiseById";
    let id: any = this.currentUser.id;
    await this.dataService.getDataById(action, id).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.allExpertise = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  async countAllOpportunity() {
    let action: string = "count-opportunityById";
    let id: any = this.currentUser.id;
    await this.dataService.getDataById(action, id).subscribe(
      (res: any) => {
        this.allOpportunity = res?.data;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
  async countAvailableEvent() {
    let action: string = "count-admission";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        this.availableEventCount = res?.data;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
