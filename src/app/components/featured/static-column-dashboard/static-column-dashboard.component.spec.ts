import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticColumnDashboardComponent } from './static-column-dashboard.component';

describe('StaticColumnDashboardComponent', () => {
  let component: StaticColumnDashboardComponent;
  let fixture: ComponentFixture<StaticColumnDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticColumnDashboardComponent]
    });
    fixture = TestBed.createComponent(StaticColumnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
