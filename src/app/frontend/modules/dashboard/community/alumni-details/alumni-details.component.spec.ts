import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDetailsComponent } from './alumni-details.component';

describe('AlumniDetailsComponent', () => {
  let component: AlumniDetailsComponent;
  let fixture: ComponentFixture<AlumniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
