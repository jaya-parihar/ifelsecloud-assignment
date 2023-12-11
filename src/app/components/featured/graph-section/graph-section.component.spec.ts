import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSectionComponent } from './graph-section.component';

describe('GraphSectionComponent', () => {
  let component: GraphSectionComponent;
  let fixture: ComponentFixture<GraphSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphSectionComponent]
    });
    fixture = TestBed.createComponent(GraphSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
