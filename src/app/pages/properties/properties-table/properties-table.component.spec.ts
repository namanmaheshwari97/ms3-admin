import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertiesTableComponent} from './properties-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store';

describe('PropertiesTableComponent', () => {
  let component: PropertiesTableComponent;
  let fixture: ComponentFixture<PropertiesTableComponent>;

  const mockStore = {
    select: jasmine.createSpy('select').and.returnValue(Observable.of([])),
    dispatch: jasmine.createSpy('dispatch')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: Store, useValue: mockStore}
      ],
      declarations: [PropertiesTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
