import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentigrateComponent } from './ventigrate.component';

describe('VentigrateComponent', () => {
  let component: VentigrateComponent;
  let fixture: ComponentFixture<VentigrateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentigrateComponent]
    });
    fixture = TestBed.createComponent(VentigrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
