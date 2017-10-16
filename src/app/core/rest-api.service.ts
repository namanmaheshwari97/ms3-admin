import {Injectable} from '@angular/core';
import {Http, Request, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RequestArgs} from '@angular/http/src/interfaces';
import {RestApiRequest} from './rest-api-request';

@Injectable()
export class RestApiService {

  constructor(private _http: Http) {
  }

  send(request: RestApiRequest): Observable<any> {
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
