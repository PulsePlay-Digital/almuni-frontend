import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAchievementComponent } from './alumni-achievement.component';

describe('AlumniAchievementComponent', () => {
  let component: AlumniAchievementComponent;
  let fixture: ComponentFixture<AlumniAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniAchievementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
