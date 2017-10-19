import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store';

describe('LoginComponent', () => {
  class MockStore {
    select(param: any) {
      return Observable.of('token');
    }
  }

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
