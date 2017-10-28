import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTableComponent } from './employees-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/observable/of';

describe('EmployeesTableComponent', () => {
  class MockStore {
    select(param: any) {
      return Observable.of([
        {
          id: 1,
          email: 'employee@test.com',
          phone: '608-123-1234'
        }
      ]);
    }
    dispatch(param: any) {
    }
  }
  let component: EmployeesTableComponent;
  let fixture: ComponentFixture<EmployeesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [ EmployeesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
