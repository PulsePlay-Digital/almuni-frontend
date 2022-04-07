import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEntrepreneurshipComponent } from './dialog-entrepreneurship.component';

describe('DialogEntrepreneurshipComponent', () => {
  let component: DialogEntrepreneurshipComponent;
  let fixture: ComponentFixture<DialogEntrepreneurshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEntrepreneurshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEntrepreneurshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
