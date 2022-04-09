import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialProjectComponent } from './add-special-project.component';

describe('AddSpecialProjectComponent', () => {
  let component: AddSpecialProjectComponent;
  let fixture: ComponentFixture<AddSpecialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecialProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
