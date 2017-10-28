import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../_actions/reducers';
import {EmailItem} from '../../../_domains/email-item';
import {EmailBlacklist} from '../email-blacklist.effects';
import {EmailBlacklistRemove} from '../email-blacklist-remove.effects';
import {EmailForm} from '../../../_domains/email-form';
import {EmailBlacklistAdd} from '../email-blacklist-add.effects';

@Component({
  selector: 'app-email-blacklist-table',
  templateUrl: './email-blacklist-table.component.html',
  styleUrls: ['./email-blacklist-table.component.scss']
})
export class EmailBlacklistTableComponent implements OnInit {
  blacklist: EmailItem[];

  constructor(private _store: Store<any>) {

    this._store.select(fromRoot.selectBlacklistList).subscribe((list) => this.blacklist = list);
  }

  ngOnInit() {

    this._store.dispatch(new EmailBlacklist.Request());
  }

  onCreate(form: EmailForm) {

    this._store.dispatch(new EmailBlacklistAdd.Request(form));
  }

  onDelete(email) {

    this._store.dispatch(new EmailBlacklistRemove.Request(email.id));
  }
}
