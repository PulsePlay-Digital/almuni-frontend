import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedJourneyByMeComponent } from './shared-journey-by-me.component';

describe('SharedJourneyByMeComponent', () => {
  let component: SharedJourneyByMeComponent;
  let fixture: ComponentFixture<SharedJourneyByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedJourneyByMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedJourneyByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
