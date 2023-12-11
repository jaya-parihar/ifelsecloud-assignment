import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRendererComponent } from './action-renderer.component';

describe('ActionRendererComponent', () => {
  let component: ActionRendererComponent;
  let fixture: ComponentFixture<ActionRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionRendererComponent]
    });
    fixture = TestBed.createComponent(ActionRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
