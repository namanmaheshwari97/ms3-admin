import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import * as AuthActions from '../_actions/auth.actions';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect({dispatch: false}) onSet$: Observable<Action> = this.actions$
    .ofType(AuthActions.SET)
    .do(() => {
      console.log('navigating');
      return this._router.navigate(['pages']);
    });

  @Effect({dispatch: false}) onClear$: Observable<Action> = this.actions$
    .ofType(AuthActions.CLEAR)
    .do(() => this._router.navigate(['login']));

  constructor(private _router: Router, private actions$: Actions) {
  }
}
