import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PropertySummary} from '../../../_domains/property-summary';
import * as fromRoot from '../../../_actions/reducers';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.scss']
})
export class PropertiesTableComponent implements OnInit {
  properties: PropertySummary[];

  constructor(private _store: Store<any>) {

    this._store.select(fromRoot.selectPropertiesList).subscribe((list) => this.properties = list);
  }

  ngOnInit() {
  }

}
