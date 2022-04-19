import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAlumniComponent } from './shared-alumni.component';

describe('SharedAlumniComponent', () => {
  let component: SharedAlumniComponent;
  let fixture: ComponentFixture<SharedAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedAlumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
