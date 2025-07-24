import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsSAComponent } from './instructors-sa.component';

describe('InstructorsSAComponent', () => {
  let component: InstructorsSAComponent;
  let fixture: ComponentFixture<InstructorsSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsSAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorsSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
