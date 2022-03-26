import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateContributeComponent } from './collaborate-contribute.component';

describe('CollaborateContributeComponent', () => {
  let component: CollaborateContributeComponent;
  let fixture: ComponentFixture<CollaborateContributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborateContributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
