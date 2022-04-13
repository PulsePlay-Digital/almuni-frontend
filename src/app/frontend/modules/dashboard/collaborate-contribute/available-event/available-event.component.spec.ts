import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableEventComponent } from './available-event.component';

describe('AvailableEventComponent', () => {
  let component: AvailableEventComponent;
  let fixture: ComponentFixture<AvailableEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
