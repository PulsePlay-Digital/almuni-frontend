import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalenceToMbaComponent } from './equivalence-to-mba.component';

describe('EquivalenceToMbaComponent', () => {
  let component: EquivalenceToMbaComponent;
  let fixture: ComponentFixture<EquivalenceToMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquivalenceToMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalenceToMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
