import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {User} from '../../../_domains/user';
import * as fromRoot from '../../../_actions/reducers';
import * as AlertActions from '../../../_actions/alert.actions';
import {Users} from '../users.effects';
import {UsersActivate} from '../users-activate.effects';
import {UsersRemove} from '../users-remove.effects';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  settings = {
    attr: {
      class: 'table'
    },
    edit: {
      editButtonContent: 'Activate'
    },
    mode: 'external',
    hideSubHeader: true,
    columns: {
      id: {
        title: 'ID',
        sort: false,
        filter: false
      },
      email: {
        title: 'Email',
        sort: false,
        filter: false
      },
      phoneNumber: {
        title: 'Phone Number',
        sort: false,
        filter: false
      },
      active: {
        title: 'Active',
        sort: false,
        filter: false
      }
    }
  };

  data: User[];

  constructor(private _store: Store<any>) {
    this._store.select(fromRoot.selectUsersList).subscribe((list) => {
      this.data = list;
    });
  }

  ngOnInit() {
    this._store.dispatch(new Users.Request());
  }

  onDelete(event) {
    if (event.data.active) {

      this._store.dispatch(new UsersRemove.Request(event.data.id));
    } else {

      this._store.dispatch(new AlertActions.SetError('User is already inactive'));
    }
  }

  onActivate(event) {
    if (event.data.active) {

      this._store.dispatch(new AlertActions.SetError('User is already active'));
    } else {

      this._store.dispatch(new UsersActivate.Request(event.data.id));
    }
  }
}
