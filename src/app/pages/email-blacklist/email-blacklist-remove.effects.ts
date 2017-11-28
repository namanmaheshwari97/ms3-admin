import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import {API} from '../../core/api-endpoints.constant';

import {RestApiService} from '../../core/rest-api.service';
import {RestApiRequest} from '../../core/rest-api-request';
import * as EmailBlacklistActions from '../../_actions/email-blacklist.actions';
import * as AlertActions from '../../_actions/alert.actions';

export namespace EmailBlacklistRemove {
  export const REQUEST = 'EmailBlacklistRemoveEffects.REQUEST';
  export const SUCCESS = 'EmailBlacklistRemoveEffects.SUCCESS';
  export const ERROR = 'EmailBlacklistRemoveEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: number) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: string) {
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
        const request = new RestApiRequest(API.BLACKLIST.DELETE);
        request.setPathParams({id: payload});

        return this._api.send(request)
          .map(response => new Success(response.email))
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => action.payload)
      .map((email) => new EmailBlacklistActions.RemoveItem(email));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Something Went Wrong'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
