import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPurposeCultureComponent } from './common-purpose-culture.component';

describe('CommonPurposeCultureComponent', () => {
  let component: CommonPurposeCultureComponent;
  let fixture: ComponentFixture<CommonPurposeCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPurposeCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPurposeCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
