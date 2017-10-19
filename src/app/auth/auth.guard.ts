import { Injectable } from '@angular/core';
import {Route, CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as fromRoot from '../_actions/reducers';

@Injectable()
export class AuthGuard implements CanLoad {
  private _token: string;
  constructor(private _store: Store<any>, private _router: Router) {
    this._store.select(fromRoot.selectAuthToken)
      .subscribe((token) => {
        this._token = token;
      });
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    if (this._token == null) {
      this._router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
