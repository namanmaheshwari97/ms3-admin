import { Component, OnInit } from '@angular/core';
import {PAGES_MENU_ITEMS} from './pages-menu.constant';
import {Store} from '@ngrx/store';
import * as fromRoot from '../_actions/reducers';
import {Auth} from '../_domains/auth';
import {SignOut} from '../auth/sign-out.effects';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public menu = PAGES_MENU_ITEMS;
  email: string;

  constructor(private _store: Store<any>) {

    this._store.select(fromRoot.selectAuth).subscribe((auth: Auth) => this.email = auth.email);
  }

  ngOnInit() {
  }

  onSignOut() {

    this._store.dispatch(new SignOut.Request());
  }
}
