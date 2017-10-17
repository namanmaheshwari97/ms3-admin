import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBlacklistTableComponent } from './email-blacklist-table.component';

describe('EmailBlacklistTableComponent', () => {
  let component: EmailBlacklistTableComponent;
  let fixture: ComponentFixture<EmailBlacklistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
