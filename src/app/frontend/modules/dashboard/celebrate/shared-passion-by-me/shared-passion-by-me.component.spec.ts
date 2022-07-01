import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPassionByMeComponent } from './shared-passion-by-me.component';

describe('SharedPassionByMeComponent', () => {
  let component: SharedPassionByMeComponent;
  let fixture: ComponentFixture<SharedPassionByMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPassionByMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedPassionByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
