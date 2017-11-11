import { Component, OnInit } from '@angular/core';
import {PAGES_MENU_ITEMS} from './pages-menu.constant';
import {Store} from '@ngrx/store';
import * as fromRoot from '../_actions/reducers';
import {Auth} from '../_domains/auth';
import {SignOut} from '../auth/sign-out.effects';
import {User} from '../_domains/user';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public menu = PAGES_MENU_ITEMS;
  user: User;

  constructor(private _store: Store<any>) {

    this._store.select(fromRoot.selectAuth).subscribe((auth: Auth) => this.user = auth.user);
  }

  ngOnInit() {
  }

  onSignOut() {

    this._store.dispatch(new SignOut.Request());
  }
}
