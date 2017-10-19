import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAddComponent } from './employees-add.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';

describe('EmployeesAddComponent', () => {
  class MockStore {
    dispatch(param: any) {
    }
  }

  let component: EmployeesAddComponent;
  let fixture: ComponentFixture<EmployeesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [ EmployeesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
