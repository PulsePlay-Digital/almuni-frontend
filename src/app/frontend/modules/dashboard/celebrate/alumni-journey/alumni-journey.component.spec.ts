import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniJourneyComponent } from './alumni-journey.component';

describe('AlumniJourneyComponent', () => {
  let component: AlumniJourneyComponent;
  let fixture: ComponentFixture<AlumniJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
