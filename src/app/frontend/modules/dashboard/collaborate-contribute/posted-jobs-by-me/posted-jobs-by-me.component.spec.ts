import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedJobsByMeComponent } from './posted-jobs-by-me.component';

describe('PostedJobsByMeComponent', () => {
  let component: PostedJobsByMeComponent;
  let fixture: ComponentFixture<PostedJobsByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedJobsByMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedJobsByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
