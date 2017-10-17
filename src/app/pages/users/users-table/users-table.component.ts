import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../_actions/reducers';
import {Users} from '../users.effects';
import {UsersRemove} from '../users-remove.effects';
import {User} from '../../../_domains/user';

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
    actions: {
      edit: false
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
      }
    }
  };

  data: User[];

  constructor(private _store: Store<any>) {
    this._store.select(fromRoot.selectUsersList).subscribe((list) => {
      this.data = list;
    })
  }

  ngOnInit() {
    this._store.dispatch(new Users.Request());
  }

  onDelete(event) {
    this._store.dispatch(new UsersRemove.Request(event.data.id));
  }
}
