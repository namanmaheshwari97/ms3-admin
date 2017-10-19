import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {Alert, ALERT_TYPE} from '../../_domains/alert';
import {Credentials} from '../../_domains/credentials';
import * as fromRoot from '../../_actions/reducers';
import {SignIn} from '../sign-in.effects';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private alert$: Observable<Alert>;
  credentials: FormGroup;
  loginError;

  constructor(private _store: Store<any>, private _fb: FormBuilder) {
    this.alert$ = this._store.select(fromRoot.selectAlert);
    this.credentials = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.alert$.subscribe((alert) => {
      if (ALERT_TYPE.ERROR == alert.type) {
        this.loginError = {
          active: true,
          message: alert.message
        };
      } else {
        this.loginError = {
          active: false,
          message: null
        };
      }
    })
  }

  ngOnInit() {
  }

  onSubmit({value, valid}: { value: Credentials, valid: boolean }) {
    if (valid) {
      this._store.dispatch(new SignIn.Request(value));
    }
  }
}
