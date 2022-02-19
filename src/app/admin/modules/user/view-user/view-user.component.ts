import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.scss"],
})
export class ViewUserComponent implements OnInit {
  public data: any;

  constructor(public aroute: ActivatedRoute, public http: HttpClient, public _location: Location) {
    const userId: number =  this.aroute.snapshot.queryParams.id;
    this.getUser(userId);
  }

  ngOnInit(): void {
    
  }

  getUser(data: number) {
    let url = 'https://gorest.co.in/public/v2/users'
    this.http.get<any[]>(`${url}/` + data).subscribe((res)=> {
     this.data = res;
    });     
  }

  navigateBack() {
    this._location.back();
  }
}
