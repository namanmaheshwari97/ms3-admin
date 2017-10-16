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
import * as EmployeesActions from '../../_actions/employees.actions';
import * as AlertActions from '../../_actions/alert.actions';
import {EmployeesTable} from '../../_domains/employees-table';

export namespace Employees {
  export const REQUEST = 'EmployeesEffects.REQUEST';
  export const SUCCESS = 'EmployeesEffects.SUCCESS';
  export const ERROR = 'EmployeesEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: EmployeesTable) {
    }
  }

  export class Error implements Action {
    readonly type = ERROR;
  }

  @Injectable()
  export class Effects {
    @Effect() onRequest$: Observable<Action> = this.actions$
      .ofType(REQUEST)
      .switchMap(() => {
        let request = new RestApiRequest(API.EMPLOYEES.QUERY);

        return this._api.send(request)
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => action.payload)
      .map((response) => new EmployeesActions.Set(response));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Cannot Get Employees Table'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
