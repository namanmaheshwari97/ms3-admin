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
import {EmployeeForm} from '../../_domains/employee-form';

export namespace EmployeesAdd {
  export const REQUEST = 'EmployeesAddEffects.REQUEST';
  export const SUCCESS = 'EmployeesAddEffects.SUCCESS';
  export const ERROR = 'EmployeesAddEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: EmployeeForm) {
    }
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
      .map((action: Request) => action.payload)
      .switchMap((payload) => {
        const request = new RestApiRequest(API.EMPLOYEES.CREATE);
        request.setBody(payload);

        return this._api.send(request)
          .map(response => new Success())
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map(() => new AlertActions.SetInfo('Employee Created'));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Something Went Wrong'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
