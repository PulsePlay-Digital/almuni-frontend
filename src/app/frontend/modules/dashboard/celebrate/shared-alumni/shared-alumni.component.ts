import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../../../../../environments/environment';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-shared-alumni',
  templateUrl: './shared-alumni.component.html',
  styleUrls: ['./shared-alumni.component.scss']
})
export class SharedAlumniComponent implements OnInit {
  @Input() heading: any;
  @Input() type: any;
  @Input() alumniData: any;
  
  p: number = 1;
  loading: boolean = false;
  imgPath = environment.imgUrl;
  sharedData: any = [];

  constructor(
    public dataService: DataService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.sharedData = this.alumniData;
      this.loading = false;
    }, 2000);
    
  }

  viewDetail(params: any) {
    this.router.navigate(['/celebrate/journey-detail'], { queryParams: { id: params, type: this.heading } });
  }
}
