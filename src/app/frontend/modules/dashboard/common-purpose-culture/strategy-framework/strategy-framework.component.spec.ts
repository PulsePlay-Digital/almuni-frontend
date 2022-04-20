import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyFrameworkComponent } from './strategy-framework.component';

describe('StrategyFrameworkComponent', () => {
  let component: StrategyFrameworkComponent;
  let fixture: ComponentFixture<StrategyFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
