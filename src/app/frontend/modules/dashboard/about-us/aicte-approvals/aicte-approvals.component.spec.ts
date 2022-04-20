import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AicteApprovalsComponent } from './aicte-approvals.component';

describe('AicteApprovalsComponent', () => {
  let component: AicteApprovalsComponent;
  let fixture: ComponentFixture<AicteApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AicteApprovalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AicteApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
