import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../_actions/reducers';
import {Employees} from '../employees.effects';
import {Employee} from '../../../_domains/employee';
import {EmployeesRemove} from '../employees-remove.effects';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {
  employees: Employee[];

  constructor(private _store: Store<any>) {

    this._store.select(fromRoot.selectEmployeesList).subscribe((list) => this.employees = list);
  }

  ngOnInit() {

    this._store.dispatch(new Employees.Request());
  }

  onDelete(employee) {

    this._store.dispatch(new EmployeesRemove.Request(employee.id));
  }
}
