import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../_actions/reducers';
import * as AlertActions from '../../_actions/alert.actions';
import {Alert, ALERT_TYPE} from '../../_domains/alert';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-alert-bar',
  templateUrl: './alert-bar.component.html',
  styleUrls: ['./alert-bar.component.scss']
})
export class AlertBarComponent implements OnInit {
  alert: Alert = {
    type: null,
    message: null
  };
  alertClass = '';

  constructor(private _store: Store<any>, private _router: Router) {
    this._store.select(fromRoot.selectAlert).subscribe((alert) => {
      this.alert = alert;
      this.alertClass = this.getAlertClass(this.alert.type);
    });

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.clearAlert();
      }
    });
  }

  ngOnInit() {
  }

  clearAlert() {

    this._store.dispatch(new AlertActions.Clear());
  }

  private getAlertClass(type: ALERT_TYPE) {
    switch (type) {
      case ALERT_TYPE.INFO:
        return 'alert-info';

      case ALERT_TYPE.ERROR:
        return 'alert-danger';

      default:
        return '';
    }
  }
}
