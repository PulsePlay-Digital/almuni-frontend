import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJourneyDetailComponent } from './view-journey-detail.component';

describe('ViewJourneyDetailComponent', () => {
  let component: ViewJourneyDetailComponent;
  let fixture: ComponentFixture<ViewJourneyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJourneyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJourneyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
