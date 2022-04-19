import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAlumniDetailsComponent } from './featured-alumni-details.component';

describe('FeaturedAlumniDetailsComponent', () => {
  let component: FeaturedAlumniDetailsComponent;
  let fixture: ComponentFixture<FeaturedAlumniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAlumniDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedAlumniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
