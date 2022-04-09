import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeacialProjectsComponent } from './speacial-projects.component';

describe('SpeacialProjectsComponent', () => {
  let component: SpeacialProjectsComponent;
  let fixture: ComponentFixture<SpeacialProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeacialProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeacialProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
