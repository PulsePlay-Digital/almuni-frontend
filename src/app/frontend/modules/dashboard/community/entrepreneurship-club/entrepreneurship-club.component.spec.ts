import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurshipClubComponent } from './entrepreneurship-club.component';

describe('EntrepreneurshipClubComponent', () => {
  let component: EntrepreneurshipClubComponent;
  let fixture: ComponentFixture<EntrepreneurshipClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurshipClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurshipClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
