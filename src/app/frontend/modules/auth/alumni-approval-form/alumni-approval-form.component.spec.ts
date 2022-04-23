import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniApprovalFormComponent } from './alumni-approval-form.component';

describe('AlumniApprovalFormComponent', () => {
  let component: AlumniApprovalFormComponent;
  let fixture: ComponentFixture<AlumniApprovalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniApprovalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniApprovalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
