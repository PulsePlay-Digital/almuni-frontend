import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPostedByAlumniComponent } from './project-posted-by-alumni.component';

describe('ProjectPostedByAlumniComponent', () => {
  let component: ProjectPostedByAlumniComponent;
  let fixture: ComponentFixture<ProjectPostedByAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPostedByAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPostedByAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
