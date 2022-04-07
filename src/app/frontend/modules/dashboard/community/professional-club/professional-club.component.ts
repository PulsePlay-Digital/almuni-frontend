import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-club',
  templateUrl: './professional-club.component.html',
  styleUrls: ['./professional-club.component.scss']
})
export class ProfessionalClubComponent implements OnInit {

  club: boolean = false;
  professionalClub = [
    {id: 1, title:'Digital',club:'Join Club'},
    {id: 2, title:'Strategy',club:'Join Club'},
    {id: 3, title:'Leadership And Change',club:'Join Club'},
    {id: 4, title:'Artificial Intelligence',club:'Join Club'},
    {id: 5, title:'Big Data',club:'Join Club'},
    {id: 6, title:'Digital Transformation',club:'Join Club'},
    {id: 7, title:'Finance',club:'Join Club'},
    {id: 8, title:'FinTech',club:'Join Club'},
    {id: 9, title:'HR / Future Of Work',club:'Join Club'},
    {id: 10, title:'Internet Of Things (IOT)',club:'Join Club'},
    {id: 11, title:'Logistics, Supply Chain',club:'Join Club'},
    {id: 12, title:'Logistics, Supply Chain',club:'Join Club'},
    {id: 13, title:'Logistics, Supply Chain',club:'Join Club'},
    {id: 14, title:'Sales',club:'Join Club'},
    {id: 15, title:'SMAC (Social, Mobile, Analytics, Cloud)',club:'Join Club'}
];
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  joinUnjoin(data:any) {
    this.club = !this.club  
    console.log(this.club);
  }

  joinClub() {
    this.router.navigate(['/community/start-club'], { queryParams: { type: 'professional'} })
  }
}
