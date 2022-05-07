import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupCornerComponent } from './startup-corner.component';

describe('StartupCornerComponent', () => {
  let component: StartupCornerComponent;
  let fixture: ComponentFixture<StartupCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
