import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayerComponent } from './bayer.component';

describe('BayerComponent', () => {
  let component: BayerComponent;
  let fixture: ComponentFixture<BayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BayerComponent]
    });
    fixture = TestBed.createComponent(BayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
