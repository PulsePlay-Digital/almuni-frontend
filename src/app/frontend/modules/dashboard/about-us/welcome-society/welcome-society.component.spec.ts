import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSocietyComponent } from './welcome-society.component';

describe('WelcomeSocietyComponent', () => {
  let component: WelcomeSocietyComponent;
  let fixture: ComponentFixture<WelcomeSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
