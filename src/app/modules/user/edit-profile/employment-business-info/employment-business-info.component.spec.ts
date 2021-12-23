import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentBusinessInfoComponent } from './employment-business-info.component';

describe('EmploymentBusinessInfoComponent', () => {
  let component: EmploymentBusinessInfoComponent;
  let fixture: ComponentFixture<EmploymentBusinessInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentBusinessInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentBusinessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
