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
import * as PropertiesActions from '../../_actions/properties.actions';
import * as AlertActions from '../../_actions/alert.actions';

export namespace PropertiesRemove {
  export const REQUEST = 'PropertiesRemoveEffects.REQUEST';
  export const SUCCESS = 'PropertiesRemoveEffects.SUCCESS';
  export const ERROR = 'PropertiesRemoveEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: string) {
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
      .switchMap((id: string) => {
        const request = new RestApiRequest(API.PROPERTIES.DELETE);
        request.setPathParams({id: id});

        return this._api.send(request)
          .map(response => new Success(id))
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => new PropertiesActions.RemoveItem(action.payload));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Cannot Remove Property'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
