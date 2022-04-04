import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAtBalajiComponent } from './events-at-balaji.component';

describe('EventsAtBalajiComponent', () => {
  let component: EventsAtBalajiComponent;
  let fixture: ComponentFixture<EventsAtBalajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsAtBalajiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAtBalajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
