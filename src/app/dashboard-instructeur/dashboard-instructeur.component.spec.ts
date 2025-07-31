import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInstructeurComponent } from './dashboard-instructeur.component';

describe('DashboardInstructeurComponent', () => {
  let component: DashboardInstructeurComponent;
  let fixture: ComponentFixture<DashboardInstructeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardInstructeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInstructeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
