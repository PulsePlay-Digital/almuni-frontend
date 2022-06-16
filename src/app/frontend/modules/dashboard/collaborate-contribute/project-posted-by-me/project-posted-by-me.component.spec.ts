import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPostedByMeComponent } from './project-posted-by-me.component';

describe('ProjectPostedByMeComponent', () => {
  let component: ProjectPostedByMeComponent;
  let fixture: ComponentFixture<ProjectPostedByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPostedByMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPostedByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
