import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PropertySummary} from '../../../_domains/property-summary';
import * as fromRoot from '../../../_actions/reducers';
import {PropertiesGet} from '../properties.effects';
import {PropertiesRemove} from '../properties-remove.effects';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.scss']
})
export class PropertiesTableComponent implements OnInit {
  readonly DEFAULT_SORT_BY = 'recent';
  readonly DEFAULT_DIRECTION = 'UP';
  readonly DEFAULT_COUNT = 20;

  properties: PropertySummary[];
  cursor: string;

  constructor(private _store: Store<any>) {

    this._store.select(fromRoot.selectPropertiesList).subscribe((list) => this.properties = list);
    this._store.select(fromRoot.selectPropertiesCursor).subscribe((cursor) => this.cursor = cursor);
  }

  ngOnInit() {
    this._store.dispatch(new PropertiesGet.Request({
      sortBy: this.DEFAULT_SORT_BY,
      direction: this.DEFAULT_DIRECTION,
      count: this.DEFAULT_COUNT
    }));
  }

  getMore() {
    this._store.dispatch(new PropertiesGet.Request({
      sortBy: this.DEFAULT_SORT_BY,
      direction: this.DEFAULT_DIRECTION,
      count: this.DEFAULT_COUNT,
      cursor: this.cursor
    }));
  }

  onDelete(property) {
    this._store.dispatch(new PropertiesRemove.Request(property.id));
  }
}
