import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalajiSocialSocietyComponent } from './balaji-social-society.component';

describe('BalajiSocialSocietyComponent', () => {
  let component: BalajiSocialSocietyComponent;
  let fixture: ComponentFixture<BalajiSocialSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalajiSocialSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalajiSocialSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
