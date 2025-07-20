import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodReceiptComponent } from './good-receipt.component';

describe('GoodReceiptComponent', () => {
  let component: GoodReceiptComponent;
  let fixture: ComponentFixture<GoodReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodReceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
