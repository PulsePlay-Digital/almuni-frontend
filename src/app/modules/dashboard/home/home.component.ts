import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  alumniStories = [
    {
      id: 1,
      name: 'Maninder Singh',
      src:'./../../../../assets/userStory.png',
      alt:'Side 1',
      title:'Our Alumni success stories',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 2,
      name: 'Shri Bala ji',
      src:'./../../../../assets/userStory.png',
      alt:'Side 2',
      title:'Our Alumni success stories',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 3,
      name: 'Surinder Singh',
      src:'./../../../../assets/userStory.png',
      alt:'Side 3',
      title:'Our Alumni success stories',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ];

  // Dynamic Gallary
  gallary = [
    {
      id: 1,
      src: './../../../../assets/gallary01.png'
    },
    {
      id: 2,
      src: './../../../../assets/gallary02.png'
    },
    {
      id: 3,
      src: './../../../../assets/gallary03.png'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2500,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    nav: true
  }

  gallaryOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      400: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 1,
        stagePadding: 300,
      }
    },
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Function to connect user with alumni
   */
  goJoin() {
    this.router.navigate(['/auth/login']);
  }
}
