import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAchievementByMeComponent } from './shared-achievement-by-me.component';

describe('SharedAchievementByMeComponent', () => {
  let component: SharedAchievementByMeComponent;
  let fixture: ComponentFixture<SharedAchievementByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedAchievementByMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAchievementByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
