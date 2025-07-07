import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifCompteComponent } from './verif-compte.component';

describe('VerifCompteComponent', () => {
  let component: VerifCompteComponent;
  let fixture: ComponentFixture<VerifCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifCompteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
