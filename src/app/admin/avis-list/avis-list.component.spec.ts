import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisAdminComponent } from './avis-list.component';

describe('AvisListComponent', () => {
  let component: AvisAdminComponent;
  let fixture: ComponentFixture<AvisAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
