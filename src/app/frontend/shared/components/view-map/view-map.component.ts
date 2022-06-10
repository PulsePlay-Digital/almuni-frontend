import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Config } from 'src/app/frontend/services/config';
import { DataService } from 'src/app/frontend/services/data.service';
declare const google: any;
@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.scss']
})
export class ViewMapComponent implements OnInit {
  lat: any;
  long: any;
  mapDraggable: boolean = true;
  googleMapType = 'terrain';

  // component fields
  public coordinates: Array<any> = [];
  constructor(private dataService: DataService,
    private config: Config) { }

  ngOnInit(): void {
    this.getLocations();
  }

  async getLocations() {
    let action: string = 'lat-long';
    await this.dataService.getLocaltionData(action).pipe(
      map((res: any) => {
        return res?.data?.filter((item: any) => {
          return item;
        });
      })
    ).subscribe((result: any) => {
      for (let city of result) {
        if (city.lat != null) {
          this.coordinates.push(city);
        }
      }
      console.log(this.coordinates);
    })
  }
    /**
   * Function to redirect previous page
   */
     back() {
      this.config.navigateBack();
    }
}
