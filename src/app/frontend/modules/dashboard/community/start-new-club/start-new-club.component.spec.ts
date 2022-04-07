import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewClubComponent } from './start-new-club.component';

describe('StartNewClubComponent', () => {
  let component: StartNewClubComponent;
  let fixture: ComponentFixture<StartNewClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartNewClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNewClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
