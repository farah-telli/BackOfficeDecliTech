import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobuildspaceSAComponent } from './cobuildspace-sa.component';

describe('CobuildspaceSAComponent', () => {
  let component: CobuildspaceSAComponent;
  let fixture: ComponentFixture<CobuildspaceSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CobuildspaceSAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobuildspaceSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
