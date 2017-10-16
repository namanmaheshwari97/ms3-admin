import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

import {API} from '../core/api-endpoints.constant';

import {RestApiService} from '../core/rest-api.service';
import {RestApiRequest} from '../core/rest-api-request';
import * as AuthActions from '../_actions/auth.actions';
import * as AlertActions from '../_actions/alert.actions';

export namespace SignOut {
  export const REQUEST = 'SignOutEffects.REQUEST';
  export const SUCCESS = 'SignOutEffects.SUCCESS';
  export const ERROR = 'SignOutEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;
  }

  export class Success implements Action {
    readonly type = SUCCESS;
  }

  export class Error implements Action {
    readonly type = ERROR;
  }

  @Injectable()
  export class Effects {
    @Effect() onRequest$: Observable<Action> = this.actions$
      .ofType(REQUEST)
      .switchMap(() => {
        let request = new RestApiRequest(API.AUTH.SIGN_OUT);

        return this._api.send(request)
          .map(response => new Success())
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map(() => new AuthActions.Clear());

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .mergeMap(() => [
        new AuthActions.Clear(),
        new AlertActions.SetError('Error occurred while signing out. Revoking Token')
      ]);

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
