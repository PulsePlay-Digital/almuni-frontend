import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostedExpertiseComponent } from './my-posted-expertise.component';

describe('MyPostedExpertiseComponent', () => {
  let component: MyPostedExpertiseComponent;
  let fixture: ComponentFixture<MyPostedExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPostedExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostedExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
