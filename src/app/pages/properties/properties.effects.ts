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
import {PropertyQueryParams} from '../../_domains/property-query-params';
import {Properties} from '../../_domains/properties';

export namespace PropertiesGet {
  export const REQUEST = 'PropertiesEffects.REQUEST';
  export const SUCCESS = 'PropertiesEffects.SUCCESS';
  export const ERROR = 'PropertiesEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: PropertyQueryParams) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: Properties, public addToExistingList: boolean) {
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
      .switchMap((query: PropertyQueryParams) => {
        const request = new RestApiRequest(API.PROPERTIES.QUERY);
        request.setUrlParams(query);

        return this._api.send(request)
          .map(response => new Success(response, query.hasOwnProperty('cursor')))
          .catch(error => Observable.of(new Error()));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => action.addToExistingList
        ? new PropertiesActions.AddItems(action.payload)
        : new PropertiesActions.Set(action.payload));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map(() => new AlertActions.SetError('Cannot Get Properties Table'));

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
