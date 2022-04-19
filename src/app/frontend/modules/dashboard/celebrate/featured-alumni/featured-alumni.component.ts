import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-featured-alumni',
  templateUrl: './featured-alumni.component.html',
  styleUrls: ['./featured-alumni.component.scss']
})
export class FeaturedAlumniComponent implements OnInit {
  allFeatured: any;
  imgPath = environment.imgUrl;
  p: number = 1;
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllFeaturedAlumni();
  }

  async getAllFeaturedAlumni() {
    let  action: string = 'all-featured';
    // await this.dataService.getData(action).subscribe((res: any) => {
      let item = [
        { id: 1, alunni_name: "new test",  batch_year: "2002-2005", designation: "Developer", descripton: 'In my world what we say is innerpeace' },
        { id: 2, alunni_name: "new test 1",  batch_year: "2002-2005", designation: "Developer",descripton: 'In my world what we say is innerpeace' },
        { id: 3, alunni_name: "new test 2",  batch_year: "2000-2002", designation: "Developer 1", descripton: 'In my world what we say is innerpeace' },
        { id: 4, alunni_name: "new test 3",  batch_year: "2004-2006", designation: "Developer 2", descripton: 'In my world what we say is innerpeace' },
        { id: 5, alunni_name: "new test 4",  batch_year: "2006-2008", designation: "Developer 3",descripton: 'In my world what we say is innerpeace' },
        { id: 6, alunni_name: "new test 5",  batch_year: "2008-2010", designation: "Developer 4", descripton: 'In my world what we say is innerpeace' },
        { id: 7, alunni_name: "new test 6",  batch_year: "2008-2010", designation: "Developer 5", descripton: 'In my world what we say is innerpeace' },
        { id: 8, alunni_name: "new test 7",  batch_year: "2010-2012", designation: "Developer 6", descripton: 'In my world what we say is innerpeace' }
      ]
      // this.allFeatured = res.data;
      this.allFeatured = item;
      console.log(this.allFeatured)
    // }, error => {
    //   this.notify.notificationService.openFailureSnackBar(error);
    // })
  }

  viewDetail(params: any) {
    this.router.navigate(['/celebrate/alumni-details'], { queryParams: { data: params, type: 'featured-alumni' } })
  }
  
}
