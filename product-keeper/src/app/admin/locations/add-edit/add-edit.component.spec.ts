import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressAddEditComponent } from './add-edit.component';

describe('AddEditComponent', () => {
  let component: AddressAddEditComponent;
  let fixture: ComponentFixture<AddressAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
