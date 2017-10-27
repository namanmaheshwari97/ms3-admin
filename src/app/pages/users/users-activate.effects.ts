import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {API} from '../../core/api-endpoints.constant';

import {RestApiService} from '../../core/rest-api.service';
import {RestApiRequest} from '../../core/rest-api-request';
import * as UsersActions from '../../_actions/users.actions';
import * as AlertActions from '../../_actions/alert.actions';
import {User} from '../../_domains/user';

export namespace UsersActivate {
  export const REQUEST = 'UsersEffects.REQUEST';
  export const SUCCESS = 'UsersEffects.SUCCESS';
  export const ERROR = 'UsersEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: number) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: User) {
    }
  }

  export class Error implements Action {
    readonly type = ERROR;
  }

  @Injectable()
  export class Effects {
    @Effect() onRequest$: Observable<Action> = this.actions$
      .ofType(REQUEST)
      .switchMap((action: Request) => {
        const request = new RestApiRequest(API.USERS.ACTIVATE);
        request.setPathParams({id: action.payload});

        return this._api.send(request)
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => action.payload)
      .map((response) => new UsersActions.UpdateItem(response));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Cannot Activate User'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
