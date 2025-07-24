import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSAComponent } from './feedback-sa.component';

describe('FeedbackSAComponent', () => {
  let component: FeedbackSAComponent;
  let fixture: ComponentFixture<FeedbackSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackSAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
