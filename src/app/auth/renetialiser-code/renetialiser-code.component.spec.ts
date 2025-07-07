import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenetialiserCodeComponent } from './renetialiser-code.component';

describe('RenetialiserCodeComponent', () => {
  let component: RenetialiserCodeComponent;
  let fixture: ComponentFixture<RenetialiserCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenetialiserCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenetialiserCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
