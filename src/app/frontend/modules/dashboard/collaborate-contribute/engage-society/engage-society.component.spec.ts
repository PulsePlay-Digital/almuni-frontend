import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageSocietyComponent } from './engage-society.component';

describe('EngageSocietyComponent', () => {
  let component: EngageSocietyComponent;
  let fixture: ComponentFixture<EngageSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngageSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
