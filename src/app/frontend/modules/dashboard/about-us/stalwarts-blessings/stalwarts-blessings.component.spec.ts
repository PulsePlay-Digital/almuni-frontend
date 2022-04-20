import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalwartsBlessingsComponent } from './stalwarts-blessings.component';

describe('StalwartsBlessingsComponent', () => {
  let component: StalwartsBlessingsComponent;
  let fixture: ComponentFixture<StalwartsBlessingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StalwartsBlessingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StalwartsBlessingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
