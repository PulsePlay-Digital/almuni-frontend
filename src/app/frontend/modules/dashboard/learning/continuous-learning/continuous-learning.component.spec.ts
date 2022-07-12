import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousLearningComponent } from './continuous-learning.component';

describe('ContinuousLearningComponent', () => {
  let component: ContinuousLearningComponent;
  let fixture: ComponentFixture<ContinuousLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuousLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
