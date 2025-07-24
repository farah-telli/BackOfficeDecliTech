import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSAComponent } from './module-sa.component';

describe('ModuleSAComponent', () => {
  let component: ModuleSAComponent;
  let fixture: ComponentFixture<ModuleSAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleSAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
