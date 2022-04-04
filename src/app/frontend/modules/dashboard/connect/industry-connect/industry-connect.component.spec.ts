import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryConnectComponent } from './industry-connect.component';

describe('IndustryConnectComponent', () => {
  let component: IndustryConnectComponent;
  let fixture: ComponentFixture<IndustryConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
