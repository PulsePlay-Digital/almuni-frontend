import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniConnectVisionComponent } from './alumni-connect-vision.component';

describe('AlumniConnectVisionComponent', () => {
  let component: AlumniConnectVisionComponent;
  let fixture: ComponentFixture<AlumniConnectVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniConnectVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniConnectVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
