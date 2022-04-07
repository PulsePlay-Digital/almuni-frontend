import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessVentureInfoComponent } from './business-venture-info.component';

describe('BusinessVentureInfoComponent', () => {
  let component: BusinessVentureInfoComponent;
  let fixture: ComponentFixture<BusinessVentureInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessVentureInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessVentureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
