import {Injectable} from '@angular/core';
import {Http, Request, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RequestArgs} from '@angular/http/src/interfaces';
import {RestApiRequest} from './rest-api-request';
import {Store} from '@ngrx/store';
import * as fromRoot from '../_actions/reducers';

@Injectable()
export class RestApiService {
  private _token: string;

  constructor(private _http: Http, private _store: Store<any>) {
    this._store.select(fromRoot.selectAuthToken).subscribe((token) => {
      this._token = token;
    });
  }

  send(request: RestApiRequest): Observable<any> {
    if (null != this._token) {
      request.setHeader('token', this._token);
    }

    const options = request.toRequestOptions();

    return this._http.request(new Request(<RequestArgs>options))
      .map((res: Response) => res.json())
      .catch(this.throwResponseError);
  }

  private throwResponseError(error: any) {

    return Observable.throw({
      status: error.status,
      body: error.json()
    });
  }
}
