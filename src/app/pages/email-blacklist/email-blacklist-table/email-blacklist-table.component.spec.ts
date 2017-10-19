import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBlacklistTableComponent } from './email-blacklist-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('EmailBlacklistTableComponent', () => {
  let component: EmailBlacklistTableComponent;
  let fixture: ComponentFixture<EmailBlacklistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ EmailBlacklistTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBlacklistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
