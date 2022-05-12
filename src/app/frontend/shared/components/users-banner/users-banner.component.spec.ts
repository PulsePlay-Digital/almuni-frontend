import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBannerComponent } from './users-banner.component';

describe('UsersBannerComponent', () => {
  let component: UsersBannerComponent;
  let fixture: ComponentFixture<UsersBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
