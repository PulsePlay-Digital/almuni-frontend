import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniPassionComponent } from './alumni-passion.component';

describe('AlumniPassionComponent', () => {
  let component: AlumniPassionComponent;
  let fixture: ComponentFixture<AlumniPassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniPassionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniPassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
