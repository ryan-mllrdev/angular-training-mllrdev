import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAddEditComponent } from './add-edit.component';

describe('AddEditComponent', () => {
  let component: SupplierAddEditComponent;
  let fixture: ComponentFixture<SupplierAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
