import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqManagementComponent } from './rfq-management.component';

describe('RfqManagementComponent', () => {
  let component: RfqManagementComponent;
  let fixture: ComponentFixture<RfqManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfqManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfqManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
