import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentroshipComponent } from './mentroship.component';

describe('MentroshipComponent', () => {
  let component: MentroshipComponent;
  let fixture: ComponentFixture<MentroshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentroshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentroshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
