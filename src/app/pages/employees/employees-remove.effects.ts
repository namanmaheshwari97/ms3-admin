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
import * as AlertActions from '../../_actions/alert.actions';
import * as EmployeesActions from '../../_actions/employees.actions';

export namespace EmployeesRemove {
  export const REQUEST = 'EmployeesRemoveEffects.REQUEST';
  export const SUCCESS = 'EmployeesRemoveEffects.SUCCESS';
  export const ERROR = 'EmployeesRemoveEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: number) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: number) {
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
        const request = new RestApiRequest(API.EMPLOYEES.DELETE);
        request.setPathParams({id: payload});

        return this._api.send(request)
          .map(response => new Success(response.id))
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => action.payload)
      .map((id) => new EmployeesActions.RemoveItem(id));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Something Went Wrong'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
