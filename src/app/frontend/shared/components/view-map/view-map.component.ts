import { Component, OnInit } from '@angular/core';
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

  cities: Array<any> = [{
    "lat": 27.8247427,
    "longi": -82.75040159999999,
    label: 'Surat'
  },
  {
    "lat": 34.606806,
    "longi": -92.5042948,
    label: 'Shimla'
  },
  {
    "lat": 37.466937,
    "longi": -77.5075449,
    label: 'Solan'
  },
  ]
  // component fields
  public coordinates: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    for (let city of this.cities) {
      this.coordinates.push(city);
    }
    console.log(this.coordinates);
  }

}
