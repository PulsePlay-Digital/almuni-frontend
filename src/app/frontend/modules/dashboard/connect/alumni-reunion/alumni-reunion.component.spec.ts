import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniReunionComponent } from './alumni-reunion.component';

describe('AlumniReunionComponent', () => {
  let component: AlumniReunionComponent;
  let fixture: ComponentFixture<AlumniReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
