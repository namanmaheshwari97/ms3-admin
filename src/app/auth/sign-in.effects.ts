import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import {Auth} from '../_domains/auth';
import {Credentials} from '../_domains/credentials';
import {API} from '../core/api-endpoints.constant';

import {RestApiService} from '../core/rest-api.service';
import {RestApiRequest} from '../core/rest-api-request';
import * as AuthActions from '../_actions/auth.actions';
import * as AlertActions from '../_actions/alert.actions';

export namespace SignIn {
  export const REQUEST = 'SignInEffects.REQUEST';
  export const SUCCESS = 'SignInEffects.SUCCESS';
  export const ERROR = 'SignInEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: Credentials) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: Auth) {
    }
  }

  export class Error implements Action {
    readonly type = ERROR;
  }

  @Injectable()
  export class Effects {
    @Effect() onRequest$: Observable<Action> = this.actions$
      .ofType(REQUEST)
      .map((action: Request) => action.payload)
      .switchMap((payload) => {
        const request = new RestApiRequest(API.AUTH.SIGN_IN);
        request.setBody(payload);

        return this._api.send(request)
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => action.payload)
      .map((response) => new AuthActions.Set(response));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Invalid Credentials'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
