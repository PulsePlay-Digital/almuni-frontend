import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostedOpportunityComponent } from './my-posted-opportunity.component';

describe('MyPostedOpportunityComponent', () => {
  let component: MyPostedOpportunityComponent;
  let fixture: ComponentFixture<MyPostedOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPostedOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostedOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
