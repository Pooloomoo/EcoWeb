import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPRComponent } from './edit-pr.component';

describe('EditPRComponent', () => {
  let component: EditPRComponent;
  let fixture: ComponentFixture<EditPRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
