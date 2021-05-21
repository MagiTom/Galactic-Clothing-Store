import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCounterComponent } from './price-counter.component';

describe('PriceCounterComponent', () => {
  let component: PriceCounterComponent;
  let fixture: ComponentFixture<PriceCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
