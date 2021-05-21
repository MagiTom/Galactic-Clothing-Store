import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopComponent } from './viewShop.component';

describe('ViewShopComponent', () => {
  let component: ViewShopComponent;
  let fixture: ComponentFixture<ViewShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
