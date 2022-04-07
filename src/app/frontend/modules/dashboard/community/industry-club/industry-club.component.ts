import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industry-club',
  templateUrl: './industry-club.component.html',
  styleUrls: ['./industry-club.component.scss']
})
export class IndustryClubComponent implements OnInit {

  club: boolean = false;
  industryClub = [
    {id: 1, title:'Automotive',club:'Join Club'},
    {id: 2, title:'Public',club:'Join Club'},
    {id: 3, title:'Engineering, Construction, And Operations',club:'Join Club'},
    {id: 4, title:'Healthcare',club:'Join Club'},
    {id: 5, title:'Aerospace And Defense',club:'Join Club'},
    {id: 6, title:'Banking, Finance &Amp; Insurance',club:'Join Club'},
    {id: 7, title:'Chemicals',club:'Join Club'},
    {id: 8, title:'Consumer Products',club:'Join Club'},
    {id: 9, title:'Defense And Security',club:'Join Club'},
    {id: 10, title:'E-Commerce',club:'Join Club'}
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  joinUnjoin(data:any) {
    this.club = !this.club  
    console.log(this.club);
  }

  joinClub() {
    this.router.navigate(['/community/start-club'], { queryParams: { type: 'industry'}})
  }
}
