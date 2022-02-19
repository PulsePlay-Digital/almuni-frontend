import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsRendererComponent } from './tools-renderer.component';

describe('ToolsRendererComponent', () => {
  let component: ToolsRendererComponent;
  let fixture: ComponentFixture<ToolsRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
