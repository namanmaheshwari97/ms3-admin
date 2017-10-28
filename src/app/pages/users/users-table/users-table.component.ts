import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {User} from '../../../_domains/user';
import * as fromRoot from '../../../_actions/reducers';
import {Users} from '../users.effects';
import {UsersActivate} from '../users-activate.effects';
import {UsersRemove} from '../users-remove.effects';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users: User[];

  constructor(private _store: Store<any>) {

    this._store.select(fromRoot.selectUsersList).subscribe((list) => this.users = list);
  }

  ngOnInit() {

    this._store.dispatch(new Users.Request());
  }

  onDelete(user) {

    this._store.dispatch(new UsersRemove.Request(user.id));
  }

  onActivate(user) {

    this._store.dispatch(new UsersActivate.Request(user.id));
  }
}
