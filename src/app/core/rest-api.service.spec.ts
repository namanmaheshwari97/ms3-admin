import {TestBed, inject} from '@angular/core/testing';

import {RestApiService} from './rest-api.service';
import {RestApiRequest} from './rest-api-request';
import {Headers, HttpModule, XHRBackend, Request, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HttpStatus} from './http-status.enum';
import {API} from './api-endpoints.constant';
import 'rxjs/add/observable/of';

describe('RestApiService', () => {
  let testRequest: RestApiRequest;
  let testCredentials;

  beforeEach(() => {
    testCredentials = {
      email: 'test@email.com',
      password: 'testPassword'
    };
    testRequest = new RestApiRequest(API.AUTH.SIGN_IN);
    testRequest.setBody(testCredentials);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        RestApiService
      ]
    });

  });

  it('should be created', inject([XHRBackend, RestApiService], (mockBackend, service) => {
    expect(service).toBeTruthy();
  }));

  describe('request', () => {
    it('should send http request', inject([XHRBackend, RestApiService], (mockBackend, service) => {
      const expectedHeaders = new Headers({
        'Content-Type': 'application/json'
      });
      const expectedRequest = new Request({
        method: 'POST',
        url: API.AUTH.SIGN_IN.url,
        headers: expectedHeaders,
        body: JSON.stringify(testCredentials)
      });

      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.toJSON()).toEqual(expectedRequest.headers.toJSON());
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: {
              test: 'response'
            }
          })
        ));
      });

      service.send(testRequest).subscribe((res) => {
        expect(res.test).toEqual('response');
      });
    }));

    it('should throw response error if request returns an error', inject([XHRBackend, RestApiService], (mockBackend, service) => {
      const expectedHeaders = new Headers({
        'Content-Type': 'application/json'
      });
      const expectedRequest = new Request({
        method: 'POST',
        url: API.AUTH.SIGN_IN.url,
        headers: expectedHeaders,
        body: JSON.stringify(testCredentials)
      });
      const errorBody = {
        message: 'error'
      };

      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.toJSON()).toEqual(expectedRequest.headers.toJSON());
        connection.mockRespond(new Response(
          new ResponseOptions({
            status: HttpStatus.BAD_REQUEST,
            body: JSON.stringify(errorBody)
          })
        ));
      });

      service.send(testRequest).catch((error) => {
        expect(error.status).toEqual(HttpStatus.BAD_REQUEST);
        expect(error.body).toEqual(errorBody);
      });
    }));
  });
});
