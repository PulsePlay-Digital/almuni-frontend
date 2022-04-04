import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDrivenEventsComponent } from './alumni-driven-events.component';

describe('AlumniDrivenEventsComponent', () => {
  let component: AlumniDrivenEventsComponent;
  let fixture: ComponentFixture<AlumniDrivenEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniDrivenEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniDrivenEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
