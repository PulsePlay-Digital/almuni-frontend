import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalajiGroupComponent } from './balaji-group.component';

describe('BalajiGroupComponent', () => {
  let component: BalajiGroupComponent;
  let fixture: ComponentFixture<BalajiGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalajiGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalajiGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
