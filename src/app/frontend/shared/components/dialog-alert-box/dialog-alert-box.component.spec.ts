import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlertBoxComponent } from './dialog-alert-box.component';

describe('DialogAlertBoxComponent', () => {
  let component: DialogAlertBoxComponent;
  let fixture: ComponentFixture<DialogAlertBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAlertBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
