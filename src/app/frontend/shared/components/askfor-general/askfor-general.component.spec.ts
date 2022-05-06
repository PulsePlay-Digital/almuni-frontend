import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskforGeneralComponent } from './askfor-general.component';

describe('AskforGeneralComponent', () => {
  let component: AskforGeneralComponent;
  let fixture: ComponentFixture<AskforGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskforGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskforGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
