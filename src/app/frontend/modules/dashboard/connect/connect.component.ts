import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { TokenInterceptor } from "../../../core/token.interceptor";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-connect",
  templateUrl: "./connect.component.html",
  styleUrls: ["./connect.component.scss"],
})
export class ConnectComponent implements OnInit {
  imgPath: any;

  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {
    this.imgPath = environment.imgUrl;
  }

  ngOnInit(): void {
    
  }


}
